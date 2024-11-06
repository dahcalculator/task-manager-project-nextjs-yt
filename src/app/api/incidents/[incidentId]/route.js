// api/tasks/{taskId}

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Incident } from "@/models/incident";
import { NextResponse } from "next/server";

// get single Incident
export async function GET(request, { params }) {
  const { incidentId } = params;

  try {
    await connectDb();
    const incident = await Incident.findById(incidentId);
    return NextResponse.json(incident);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting Incident !!", 404, false);
  }
}

export async function PUT(request, { params }) {
  try {
    const { incidentId } = params;

    const { title, content, status } = await request.json();

    let task = await Incident.findById(incidentId);

    (incident.title = title), (incident.content = content), (incident.status = status);
    // ...
    await connectDb();
    const updatedIncident = await incident.save();
    return NextResponse.json(updatedIncident);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in updating Incident !! ", 500, false);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { incidentId } = params;

    await connectDb();
    await Incident.deleteOne({
      _id: incidentId,
    });
    return getResponseMessage("Incident Deleted !!", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting Incident !", 500, false);
  }
}
