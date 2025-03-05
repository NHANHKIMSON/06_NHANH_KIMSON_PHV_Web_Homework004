import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      {/* display summary on each card */}
      <div className="flex gap-5 flex-wrap">
        {dashboard.map((items)=>(
        <div key={items.id} className={`flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto ${items.color}`}>
          <div className={`p-3 rounded-xl ${items.color}`}>
            <img src={items.icon} alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">{items.totalTasks}</p>
            <p className="text-gray-400">{items.label}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
