import React, { useState } from "react";
import mockData from "../data/mockData";
import IncidentList from "../components/IncidentList";
import IncidentForm from "../components/IncidentForm";
import FilterSortControls from "../components/FilterSortControls";

const Dashboard = () => {
  const [incidents, setIncidents] = useState(mockData);
  const [severityFilter, setSeverityFilter] = useState("All");

  const addIncident = (newIncident) => setIncidents([...incidents, newIncident]);

  const filteredIncidents = incidents.filter(
    (incident) => severityFilter === "All" || incident.severity === severityFilter
  );

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">AI Safety Incident Dashboard</h1>
      <IncidentForm addIncident={addIncident} />
      <FilterSortControls setSeverityFilter={setSeverityFilter} />
      <IncidentList incidents={filteredIncidents} />
    </div>
  );
};

export default Dashboard;
