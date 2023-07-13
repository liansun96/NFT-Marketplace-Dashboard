import React from "react";
import { autions } from "../Charts/Activity";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <div className="w-[90%] md:w-[95%] mx-auto">
      <h6 className="text-white text-xl font-bold my-4">Collection</h6>
      <div className="flex flex-wrap justify-between gap-10 md:gap-6 pb-10">
        {autions.map((aution) => {
          return <CollectionCard key={aution.id} aution={aution} />;
        })}
      </div>
    </div>
  );
};

export default Collection;
