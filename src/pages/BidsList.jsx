import React from "react";
import Category from "../components/liveBids/Category";
import Navbar from "../components/Nav/Navbar";
import Table from "../components/liveBids/Table";

const BidsList = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Category />
      <Table />
    </div>
  );
};

export default BidsList;
