import React, { useState } from "react";

const IncidentItem = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      <h3 className="text-lg font-semibold">{incident.title}</h3>
      <p className="text-sm text-gray-500">Severity: <span className="font-medium">{incident.severity}</span></p>
      <p className="text-sm text-gray-500">Reported: {new Date(incident.reported_at).toLocaleDateString()}</p>
      <button className="mt-2 text-blue-600 hover:underline" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>
      {showDetails && <p className="mt-2 text-gray-700">{incident.description}</p>}
    </div>
  );
};

export default IncidentItem;
