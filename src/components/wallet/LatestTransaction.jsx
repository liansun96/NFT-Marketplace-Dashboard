import React from "react";
import { transactionList } from "./data";

export default function LatestTransaction() {
  return (
    <main className="text-white">
      <section>
        <header>
          <h2 className="text-xl font-bold mb-5 mt-10">Latest Transaction</h2>
        </header>
        <table className="w-full rounded-lg bg-[#1D1933]">
          <thead>
            <tr className="text-sm font-bold">
              <td className="p-5">Item List</td>
              <td className="">Type</td>
              <td className="">Amount</td>
              <td className="">Date & Time</td>
            </tr>
          </thead>
          <tbody>
            {transactionList.map((i) => {
              return (
                <tr key={i.id} className="text-sm">
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-3">
                      <img src="" alt="" />
                      <div>
                        <h4 className="font-bold">{i.name}</h4>
                        <p className="text-xs ">{i.quantity}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {i.type}
                  </td>
                  <td>{i.amount}</td>
                  <td>{i.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}