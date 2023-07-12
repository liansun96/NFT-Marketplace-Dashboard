import React from "react";
import Navbar from "../components/Nav/Navbar";
import AreaChart from "../components/Charts/AreaChart";
import LineChart from "../components/Charts/LineChart";
import PriceHistory from "../components/Charts/PriceHistory";
import Table from "../components/Charts/Table";
import TopSeller from "../components/Charts/TopSeller";
import TrendingActions from "../components/Charts/TrendingActions";
import Authors from "../components/Charts/Authors";
import TopBuyers from "../components/Charts/TopBuyers";

const Chart = () => {
  return (
    <div className="bg-secondary flex flex-col h-full">
      <div className="w-full w-lg[95%] mx-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-between gap-5 p-1 lg:p-5 mx-auto w-[95%]">
          <section className="flex flex-col lg:flex-row justify-between gap-5 w-full items-center lg:items-stretch">
            <LineChart />
            <AreaChart />
          </section>

          <section className="flex flex-col lg:flex-row items-center lg:items-stretch  justify-between gap-5 w-full">
            <Table />
            <TrendingActions />
          </section>

          <section className="flex flex-col lg:flex-row justify-between gap-5 w-full items-center lg:items-stretch">
            <PriceHistory />
            <TopSeller />
          </section>

          <section className="flex flex-col lg:flex-row justify-between gap-5 w-full items-center lg:items-stretch">
            <Authors />
            <TopBuyers />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Chart;
