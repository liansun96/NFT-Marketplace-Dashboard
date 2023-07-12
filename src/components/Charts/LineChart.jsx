import React from "react";
import Revenue from "./RevenueChart";
import SaleChart from "./SaleChart";
import {Link} from 'react-router-dom'

const LineChart = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 w-full lg:w-[50%]">
      <div className="flex flex-col gap-5 p-5 rounded-2xl category-bg w-full">
        <h1 className="text-xl font-semibold text-heading_text">
          Explore, buy, and sell exceptional NFTs.
        </h1>
        <p className="text-body_text text-sm font-semibold">
          It's crafted with the latest trend of design & coded with all modern{" "}
          <br />
          approaches.
        </p>
        <div className="flex items-center gap-5">
          <Link to={'/create-new-bid'}>
            <div className="transform duration-1000 transition text-center hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-6 py-2 text-xs  font-bold text-heading_text">
                  Create
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full">
        <div className="flex items-center justify-between gap-5 w-full lg:w-[50%] category-bg p-5 rounded-2xl">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-sm text-heading_text font-semibold">Sales</h2>
            <p className="text-body_text text-xs">Last 10 days</p>
          </div>
          <div className="w-[50%]">
            <SaleChart />
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 w-full lg:w-[50%] category-bg p-5 rounded-2xl">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-sm text-heading_text font-semibold">Revenue</h2>
            <p className="text-body_text text-xs">Last 10 days</p>
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
