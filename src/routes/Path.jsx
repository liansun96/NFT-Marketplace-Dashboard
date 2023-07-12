import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BidsList from "../components/liveBids/BidsList";
import CreateNewBid from "../components/liveBids/CreateNewBid";
import CollectionList from "../components/collection/CollectionList";
import CreateNewCollection from "../components/collection/CreateNewCollection";
import Wallet from "../pages/Wallet";
import Account from "../components/account/Account";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Chart from "../pages/Chart";
import Create from "../pages/Create";


const Path = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/" element={<Dashboard />}>
        <Route path="/chart" element={<Chart />} />
        <Route path="/bids-list" element={<BidsList />} />
        <Route path="/create-new-bid" element={<CreateNewBid />} />
        <Route path="/collection-list" element={<CollectionList />} />
        <Route path="/create" element={<Create/>}/>
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
