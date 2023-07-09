import React from "react";
import { Routes,Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BidsList from "../components/liveBids/BidsList";
import CreateNewBid from "../components/liveBids/CreateNewBid";
import CollectionList from "../components/collection/CollectionList";
import CreateNewCollection from "../components/collection/CreateNewCollection";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/bids-list" element={<BidsList />} />        
        <Route path="/create-new-bid" element={<CreateNewBid />} />        
        <Route path="/collection-list" element={<CollectionList />} />        
        <Route path="/create-new-collection" element={<CreateNewCollection />} />        
      </Route>
    </Routes>
  );
};

export default Path;
