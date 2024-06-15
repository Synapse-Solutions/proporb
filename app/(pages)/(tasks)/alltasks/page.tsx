"use client";
import AllTasksComponent from "@/app/components/tasks/AllTaskComponent";
import React, { useState } from "react";

const tabs = ["Upcoming Tasks", "Overdue", "Completed"];
const tasksArray = [1, 2, 3, 4, 5];
export default function page() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <AllTasksComponent
      tabs={tabs}
      activeTab={activeTab}
      tasksArray={tasksArray}
      setActiveTab={setActiveTab}
    />
  );
}
