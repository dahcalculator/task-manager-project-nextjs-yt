import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
const Incident = ({ incident, deleteIncidentParent }) => {
  const { user } = useContext(UserContext);

  function deleteIncident(incidentId) {
    // ....
    deleteIncidentParent(incidentId);
  }

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        incident.status == "high" ? "bg-red-500" : "bg-green-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{incident.title}</h1>
          <span
            onClick={() => {
              deleteIncident(incident._id);
            }}
            className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer hover:text-white"
          >
            <RxCross1 />
          </span>
        </div>
        <p className="font-normal">{incident.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{incident.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incident;
