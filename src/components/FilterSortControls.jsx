import React from "react";

const FilterSortControls = ({ setSeverityFilter, sortByDate }) => {
  return (
    <div className="flex gap-4">
      <select onChange={(e) => setSeverityFilter(e.target.value)} className="border p-2 rounded">
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button onClick={() => sortByDate("newest")} className="bg-gray-200 p-2 rounded">Sort Newest</button>
      <button onClick={() => sortByDate("oldest")} className="bg-gray-200 p-2 rounded">Sort Oldest</button>
    </div>
  );
};

export default FilterSortControls;
