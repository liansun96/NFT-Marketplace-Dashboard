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

const Charts = () => {
  return (
    <div className="bg-primary flex flex-col">
      <div className=" w-full 2xl:w-[80%] 3xl:w-[70%] 4xl:[60%] mx-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-between gap-5 p-5 mx-auto w-[95%]">
          <section className="flex items-center justify-between gap-5 w-full h-full">
            <LineChart />
            <AreaChart />
          </section>

          <section className="flex items-center justify-between gap-5 w-full h-full">
            <Table />
            <TrendingActions />
          </section>

          <section className="flex items-center justify-between gap-5 w-full h-full">
            <PriceHistory />
            <TopSeller />
          </section>

          <section className="flex items-center justify-between gap-5 w-full h-full">
            <Authors/>
            <TopBuyers/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Charts;
