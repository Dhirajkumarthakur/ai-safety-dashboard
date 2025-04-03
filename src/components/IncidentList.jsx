import React from "react";
import IncidentItem from "./IncidentItem";

const IncidentList = ({ incidents }) => {
  return (
    <div className="space-y-4">
      {incidents.length === 0 ? (
        <p className="text-gray-500">No incidents found.</p>
      ) : (
        incidents.map((incident) => <IncidentItem key={incident.id} incident={incident} />)
      )}
    </div>
  );
};

export default IncidentList;
