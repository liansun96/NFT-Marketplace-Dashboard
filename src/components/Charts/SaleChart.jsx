import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const SaleChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9],
        backgroundColor: "orange",
        pointColor: "white",
        pointRadius: 2,
        borderColor: "orange",
        pointBorderColor: "transparent",
        tension: 0.3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    plugins: {
      labels: false,
      legend: false,
      tooltip: {
        callbacks: {
          title: () => "", 
          label: (context) => context.parsed.y,
        },
        displayColors: false, 
        backgroundColor: "white", 
        bodyColor: "black", 
        borderWidth: 0, 
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: 0,
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Line
        height={60}
        data={data}
        options={options}
        style={{ marginLeft: "auto" }}
      ></Line>
    </div>
  );
};

export default SaleChart;
