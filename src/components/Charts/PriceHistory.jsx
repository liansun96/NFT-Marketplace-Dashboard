import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const PriceHistory = () => {
  const data = {
    labels: [
      "19/9/22 00:00",
      "19/9/22 01:00",
      "19/9/22 02:00",
      "19/9/22 03:00",
      "19/9/22 04:00",
      "19/9/22 05:00",
      "19/9/22 06:00",
      "19/9/22 07:00",
      "19/9/22 08:00",
      "19/9/22 09:00",
    ],
    datasets: [
      {
        label: "Bitcoins",
        data: [31, 40, 28, 51, 42, 109, 100, 79, 99, 68],
        fill: true,
        pointStyle: "circle",
        pointRadius: 1,
        backgroundColor: "rgba(171, 56, 208, 0.67)",
        borderColor: "rgba(140, 26, 158, 0.44)",
        borderWidth: 4,
        tension: 0.4,
      },
      {
        label: "Eth",
        data: [11, 32, 45, 32, 34, 52, 41, 76, 62, 88],
        fill: true,
        pointStyle: "circle",
        pointRadius: 1,
        backgroundColor: "rgba(212, 224, 54, 0.67)",
        borderColor: "rgba(26, 140, 158, 0.44)",
        borderWidth: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    usePointStyle: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 30,
          callback: function (value) {
            return value === 0 ? "0" : value;
          },
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          pointRadius: 1,
        },
        position: "top",
      },
      tooltip: {
        label: true,
        displayColors: false,
        backgroundColor: "black",
        bodyColor: "white",
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="w-full lg:w-[75%]">
      <div className="flex flex-col justify-between gap-5 p-5 category-bg rounded-xl w-full">
        <div className="flex items-center gap-2">
          <div className="">
            <img
              src="http://funto.designing-world.com/img/core-img/ethereum.png"
              alt=""
            />
          </div>
          <h5 className="text-white text-lg font-semibold">Price History</h5>
        </div>

        <div className="">
          <Line data={data} options={options} height={222} />
        </div>
      </div>
    </div>
  );
};

export default PriceHistory;
