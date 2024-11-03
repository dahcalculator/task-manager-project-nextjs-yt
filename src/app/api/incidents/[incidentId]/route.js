// api/incidents/{incidentId}

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Incident } from "@/models/incident";
import { NextResponse } from "next/server";

// get single incidents
export async function GET(request, { params }) {
  const { incidentId } = params;

  try {
    await connectDb();
    const incident = await Incident.findById(incidentId);
    return NextResponse.json(incident);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting incident !!", 404, false);
  }
}

export async function PUT(request, { params }) {
  try {
    const { incidentId } = params;

    const { title, content, status } = await request.json();

    let incident = await Incident.findById(incidentId);

    (incident.title = title), (incident.content = content), (incident.status = status);
    // ...
    await connectDb();
    const updatedIncident = await incident.save();
    return NextResponse.json(updatedIncident);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in updating incident !! ", 500, false);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { incidentId } = params;

    await connectDb();
    await Incident.deleteOne({
      _id: incidentId,
    });
    return getResponseMessage("incident Deleted !!", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting incident !", 500, false);
  }
}
