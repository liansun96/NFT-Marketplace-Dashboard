import React from "react";
import Navbar from "../Nav/Navbar";
import AreaChart from "./AreaChart";
import LineChart from "./LineChart";
import PriceHistory from "./PriceHistory";
import Table from "./Table";
import TopSeller from "./TopSeller";
import TrendingActions from "./TrendingActions";

const Chart = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="flex flex-col items-center justify-between gap-5 p-5">
        <section className="flex items-center justify-between gap-5 w-full">
          <LineChart />
          <AreaChart />
        </section>

        <section className="flex items-center justify-between gap-5 w-full">
          <Table />
          <TrendingActions />
        </section>

        <section className="flex items-center justify-between gap-5 w-full">
          <PriceHistory />
          <TopSeller />
        </section>
      </div>
    </div>
  );
};

export default Chart;
