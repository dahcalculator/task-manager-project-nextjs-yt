"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addIncident } from "@/services/incidentService";
import { taost, toast } from "react-toastify";

const AddIncident = () => {
  // console.log("this is add Incident component");

  const [incident, setIncident] = useState({
    title: "",
    content: "",
    status: "none",
    // temp solution
    userId: "64a506ab413f1d5bcafcdbec",
  });

  const handleAddIncident = async (event) => {
    event.preventDefault();
    console.log(incident);
    // validate incident data
    try {
      const result = await addIncident(incident);
      console.log(result);
      toast.success("Your incident is added !!", {
        position: "top-center",
      });

      setIncident({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("incident not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12  justify-center">
      <div className="col-span-4 col-start-5 p-5  shadow-sm">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your incident here </h1>

        <form action="#!" onSubmit={handleAddIncident}>
          {/* incident title  */}
          <div className="mt-4">
            <label
              htmlFor="incident_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="incident_title"
              name="incident_title"
              onChange={(event) => {
                setIncident({
                  ...incident,
                  title: event.target.value,
                });
              }}
              value={incident.title}
            />
          </div>
          {/* incident CONENT  */}
          <div className="mt-4">
            <label
              htmlFor="incident_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="incident_content"
              rows={5}
              name="incident_content"
              onChange={(event) => {
                setIncident({
                  ...incident,
                  content: event.target.value,
                });
              }}
              value={incident.content}
            />
          </div>

          {/* incident status */}
          <div className="mt-4">
            <label
              htmlFor="incident_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="incident_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="incident_status"
              onChange={(event) => {
                setIncident({
                  ...incident,
                  status: event.target.value,
                });
              }}
              value={incident.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="low">low</option>
              <option value="high">high</option>
            </select>
          </div>

          {/* button  actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add incident{" "}
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>

          {/* {JSON.stringify(incident)} */}
        </form>
      </div>
    </div>
  );
};

export default AddIncident;
