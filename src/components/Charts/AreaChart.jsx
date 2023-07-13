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

const AreaChart = () => {
  const data = {
    labels: [
      "1 Jun 2022",
      "2 Jun 2022",
      "3 Jun 2022",
      "4 Jun 2022",
      "5 Jun 2022",
      "6 Jun 2022",
      "7 Jun 2022",
      "8 Jun 2022",
      "9 Jun 2022",
      "10 Jun 2022",
      "11 Jun 2022",
      "12 Jun 2022",
      "13 Jun 2022",
      "14 Jun 2022",
      "15 Jun 2022",
      "16 Jun 2022",
      "17 Jun 2022",
      "18 Jun 2022",
      "19 Jun 2022",
      "20 Jun 2022",
      "21 Jun 2022",
      "22 Jun 2022",
      "23 Jun 2022",
      "24 Jun 2022",
      "25 Jun 2022",
      "26 Jun 2022",
      "27 Jun 2022",
      "28 Jun 2022",
      "29 Jun 2022",
      "30 Jun 2022",
    ],
    datasets: [
      {
        label: "visitors",
        data: [
          364, 487, 579, 632, 654, 423, 487, 645, 658, 589, 635, 702, 585, 670,
          705, 605, 852, 579, 632, 654, 347, 745, 645, 658, 589, 647, 478, 485,
          547, 631,
        ],
        fill: true,
        pointRadius: 1,
        backgroundColor: "rgba(171, 56, 208, 0.67)",
        borderColor: "rgba(140, 26, 158, 0.44)",
        borderWidth: 4,
        tension:0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
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
        display: false,
      },
      tooltip: {
        label:true,
        displayColors: false,
        backgroundColor: "black",
        bodyColor: "white",
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="w-full lg:w-[50%]">
      <div className="flex flex-col gap-5 p-5 justify-between category-bg rounded-2xl">
        <div className="">
          <h5 className="text-xl font-semibold text-heading_text">Montly Visitors</h5>
        </div>
        <div className="">
          <Line data={data} options={options} height={222}/>
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
