import { transactionList } from "./data";

export default function LatestTransaction() {
  return (
    <main className="text-white">
      <section>
        <header>
          <h2 className="text-xl font-bold mb-5 mt-10">Latest Transaction</h2>
        </header>
        <div className="overflow-x-scroll category-bg rounded-lg mb-5">
          <table className="lg:w-full w-[30rem] ">
            <thead>
              <tr className="text-sm font-bold">
                <td className="p-7">Item List</td>
                <td className="">Type</td>
                <td className="">Amount</td>
                <td className="">Date & Time</td>
              </tr>
            </thead>
            <tbody>
              {transactionList.map((i) => {
                return (
                  <tr key={i.id} className="text-sm hover:bg-[#131129]">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={i.image} alt="" className="w-10 rounded-lg" />
                        <div>
                          <h4 className="font-bold">{i.name}</h4>
                          <p className="text-xs ">{i.quantity}</p>
                        </div>
                      </div>
                    </td>
                    <td>{i.type}</td>
                    <td>{i.amount}</td>
                    <td>{i.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
