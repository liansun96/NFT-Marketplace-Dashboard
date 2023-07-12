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
    <div className="bg-primary flex flex-col h-full">
      <div className="w-full 2xl:w-[90%] 3xl:w-[80%] 4xl:w-[60%] mx-auto">
        <div className="w-full lg:w-[98%] mx-auto">
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
