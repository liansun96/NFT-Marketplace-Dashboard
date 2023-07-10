import React from "react";
import Revenue from "./RevenueChart";
import SaleChart from "./SaleChart";

const LineChart = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 w-[50%]">
      <div className="flex flex-col gap-5 p-5 rounded-2xl bg-gray-800 w-full">
        <h1 className="text-2xl font-semibold text-white">
          Explore, buy, and sell exceptional NFTs.
        </h1>
        <p className="text-white text-sm font-semibold">
          It's crafted with the latest trend of design & coded with all modern
          approaches.
        </p>
        <div className="flex items-center gap-5">
          <div className="px-5 py-2 rounded-3xl bg-white hover:bg-yellow-500 transition">
            <button className="text-xs">Discover</button>
          </div>
          <div className="px-5 py-2 rounded-3xl bg-white hover:bg-yellow-500 transition">
            <button className="text-xs">Create</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 w-full">
        <div className="flex items-center justify-between gap-5 w-[50%] bg-black p-5 rounded-2xl">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-sm text-white font-semibold">Sales</h2>
            <p className="text-gray-500 text-xs">Last 10 days</p>
          </div>
          <div className="w-[50%]">
            <SaleChart />
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 w-[50%] bg-black p-5 rounded-2xl">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-sm text-white font-semibold">Revenue</h2>
            <p className="text-gray-500 text-xs">Last 10 days</p>
          </div>
          <div className="w-[50%]">
            <Revenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
