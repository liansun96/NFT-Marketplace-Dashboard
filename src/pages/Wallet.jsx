import React from "react";
import YourBalance from "../components/wallet/YourBalance";
import LatestTransaction from "../components/wallet/LatestTransaction";
import Card from "../components/wallet/Card";
import QuickTransfer from "../components/wallet/QuickTransfer";
import Navbar from "../components/Nav/Navbar";

export default function Wallet() {
  return (
    <main className="h-screen overflow-y-scroll bg-[#070B24]">
      {/* https://gigaland.io/images/background/19.jpg
      https://gigaland.io/images/background/8.jpg */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <section className="lg:flex gap-5 px-5 h-fit">
        <div className="basis-1 lg:basis-2/3 pt-5 ">
          <YourBalance />
          <LatestTransaction />
        </div>
        <div className="basis-1/3 mt-5">
          <Card />
          <QuickTransfer />
        </div>
      </section>
    </main>
  );
}
