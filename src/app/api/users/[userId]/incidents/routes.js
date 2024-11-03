// localhost:3000/api/users/[userId]/incidents

import { getResponseMessage } from "@/helper/responseMessage";
import { Incident } from "@/models/incident";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // get user using id
    await connectDb();
    const incidents = await Incident.find({
      userId: userId,
    });
    return NextResponse.json(incidents);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get incidents", 404, false);
  }
}
