import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BidsList from "../pages/BidsList";
import CreateNewBid from "../components/liveBids/CreateNewBid";
import CollectionList from "../components/collection/CollectionList";
import CreateNewCollection from "../components/collection/CreateNewCollection";
import Wallet from "../pages/Wallet";
import Account from "../components/account/Account";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Chart from "../pages/Chart";
import Create from "../pages/Create";

import ItemDetail from "../components/itemDetail/ItemDetail";
import BidHistory from "../components/itemDetail/Nest/BidHistory";
import Info from "../components/itemDetail/Nest/Info";
import Provenance from "../components/itemDetail/Nest/Provenance";

const Path = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Chart />} />
        <Route path="/bids-list" element={<BidsList />} />
        <Route path="/item-detail/:id" element={<ItemDetail />}>
          <Route path="" index element={<BidHistory />} />
          <Route path="info" element={<Info />} />
          <Route path="pro" element={<Provenance />} />
        </Route>
        <Route path="/create-new-bid" element={<CreateNewBid />} />
        <Route path="/collection-list" element={<CollectionList />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/create-new-collection"
          element={<CreateNewCollection />}
        />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default Path;
