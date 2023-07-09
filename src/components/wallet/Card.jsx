import React from "react";

export default function Card() {
  return (
    <main>
      <div
        className="w-full rounded-lg h-52 bg-card p-5 flex flex-col justify-between relative"
        style={{
          backgroundImage: `url(${"https://www.psdgraphics.com/file/world-map-background.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <img
          className="w-16 absolute top-2 right-6"
          src="https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/maestro-512.png"
          alt=""
        />
        <div className="text-white">
            <p className="text-sm font-semibold">Main Balance</p>
            <p className="text-2xl font-bold">$88,455.12</p>
        </div>
        <div className="flex text-white text-[0.9rem] font-semibold gap-10">
            <div>
                <p>VALID THRU</p>
                <p>09/28</p>
            </div>
            <div >
                <p>CARD HOLDER</p>
                <p>Admin name</p>
            </div>
        </div>
      </div>
    </main>
  );
}
