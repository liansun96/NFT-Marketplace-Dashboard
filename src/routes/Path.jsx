import React from "react";
import LiveBids from "../components/liveBids/LiveBids";
import { Routes,Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<LiveBids />} />        
      </Route>
    </Routes>
  );
};

export default Path;
