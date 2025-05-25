import React from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "employees", label: "Employee Management" },
  { id: "consumers", label: "Consumers" },
  { id: "billing", label: "Billing" },
  { id: "outages", label: "Outages" },
  { id: "systeminformation", label: "SystemInformation" },
];

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex mb-6 overflow-x-auto">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`px-6 py-3 font-medium text-sm rounded-t-lg whitespace-nowrap ${
            activeTab === id
              ? "bg-white text-green-700 border-t-2 border-green-700 shadow-md"
              : "bg-gray-100 text-gray-600"
          } flex items-center`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
