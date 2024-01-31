"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CircleProgressBar(props: {
  percentage?: number;
  color: string;
}) {
  const data = {
    labels: ["Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["grey", props.color],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    backgroundColor: "gray",
    cutout: "70%", // Adjust the size of the center hole
    cutoutPercentage: 40, // Adjust the size as a percentage of the chart's radius
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
