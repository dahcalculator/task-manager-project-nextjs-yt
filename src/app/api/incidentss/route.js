// /incidents

import { getResponseMessage } from "@/helper/responseMessage";
import { Incident } from "@/models/incident";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

//get all the incidents
export async function GET(request) {
  try {
    await connectDb();
    const incidents = await Incident.find();
    return NextResponse.json(incidents);
  } catch (error) {
    console.log(error);
    return "Error in gettting data !!", 404, false;
  }
}

// create all the incidents
export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  // fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  // console.log(data);
  console.log(data._id);

  try {
    const incident = new Incident({
      title,
      content,
      userId: data._id,
      status,
    });

    await connectDb();
    const createdIncident = await incident.save();
    return NextResponse.json(createdIncident, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    console.log("my message");
    return getResponseMessage("Failed to create Incident !! ", 500, false);
  }
}

//
