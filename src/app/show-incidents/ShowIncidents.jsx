"use client";
import UserContext from "@/context/userContext";
import { deleteIncident, getIncidentsOfUser } from "@/services/incidentService";
import React, { useContext, useEffect, useState } from "react";
import Incident from "./Incident";
import { toast } from "react-toastify";

const ShowIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const context = useContext(UserContext);
  async function loadIncidents(userId) {
    try {
      const incidents = await getIncidentsOfUser(userId);
      setIncidents([...incidents].reverse());
      console.log(incidents);
  
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if (context.user) {
      loadIncidents(context.user._id);
    }
  }, [context.user]);

  async function deleteIncidentParent(incidentsId) {
    try {
      const result = await deleteIncident(incidentsId);
      console.log(result);
      const newIncidents = incidents.filter((item) => item._id != incidentsId);
      setIncidents(newIncidents);
      toast.success("Your incident is deleted ");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting incident !!");
    }
  }

  console.log(incidents)
  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your incidents ( {incidents.length} )</h1>

        {incidents.map((incident) => (
          <Incident
            incident={incident}
            key={incident._id}
            deleteIncidentParent={deleteIncidentParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowIncidents;
