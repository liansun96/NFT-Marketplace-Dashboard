import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Chart = () => {
    const labels = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]
  const data = {
    labels,
    datasets: [
      {
        barThickness: 7,
        backgroundColor: "#f6f7f8",
        hoverBackgroundColor: "#E039FD",
        borderRadius: 10,
        
        label: "$",
        data: [6734, 9762, 4244, 8534, 3987, 4580, 6768],
      },
      {
        barThickness: 7,
        backgroundColor: "red",
        hoverBackgroundColor: "#E039FD",
        borderRadius: 10,
        label: "$",
        data: [5015, 5455, 2987, 3455, 1198, 5987, 9076],
      },
    ],
    
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: false,
      label: null,
      tooltip: {
        displayColors: true,
        usePointStyle: true,
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
        
        display: true,
        grid: {
          display: false,
        },
        ticks: {
            display: true,
            color: "white"
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Bar data={data} options={options} width={400} height={250}></Bar>
    </div>
  );
};

export default Chart;
