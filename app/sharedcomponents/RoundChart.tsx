"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Yellow", "Red", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#FFB120", "#FF4949", "#18D06B"],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: "85%", // Adjust the size of the center hole
  cutoutPercentage: 40, // Adjust the size as a percentage of the chart's radius
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function RoundChart() {
  return <Doughnut data={data} options={options} />;
}
