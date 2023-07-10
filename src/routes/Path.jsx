import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BidsList from "../components/liveBids/BidsList";
import CreateNewBid from "../components/liveBids/CreateNewBid";
import CollectionList from "../components/collection/CollectionList";
import CreateNewCollection from "../components/collection/CreateNewCollection";
import Wallet from "../pages/Wallet";
import Charts from "../components/Charts/Charts";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/charts" element={<Charts/>}/>
        <Route path="/bids-list" element={<BidsList />} />
        <Route path="/create-new-bid" element={<CreateNewBid />} />
        <Route path="/collection-list" element={<CollectionList />} />
        <Route
          path="/create-new-collection"
          element={<CreateNewCollection />}
        />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
};

export default Path;
