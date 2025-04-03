import React, { useState } from "react";

const IncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Title and Description are required!");
    
    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    
    addIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-2">
      <input type="text" placeholder="Incident Title" className="w-full p-2 border rounded"
        value={title} onChange={(e) => setTitle(e.target.value)} required />
      
      <textarea placeholder="Incident Description" className="w-full p-2 border rounded"
        value={description} onChange={(e) => setDescription(e.target.value)} required />
      
      <select className="w-full p-2 border rounded" value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Report Incident
      </button>
    </form>
  );
};

export default IncidentForm;
