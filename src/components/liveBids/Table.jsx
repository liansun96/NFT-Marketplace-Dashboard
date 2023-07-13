import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { activeBids } from "../../constants/livebids";
import { useNavigate } from "react-router";

const Table = () => {
  const [showName, setShowName] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showQty, setShowQty] = useState(false);
  const [showAmt, setShowAmt] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [sortedData, setSortedData] = useState(activeBids);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const sortByProperty = (property) => {
    const sortedData = [...activeBids].sort((a, b) => {
      let result;
      if (property === "title") {
        result = a.title.localeCompare(b.title);
      } else if (
        property === "openPrice" ||
        property === "yourOffer" ||
        property === "price"
      ) {
        result = a[property] - b[property];
      } else if (property === "time") {
        const timeA = parseInt(a[property].split(" ")[0]);
        const timeB = parseInt(b[property].split(" ")[0]);
        result = timeA - timeB;
      }

      // Reverse the result if sorting order is descending
      if (sortOrder === "desc") {
        result *= -1;
      }

      return result;
    });

    setSortedData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleCheckboxChange = (index) => {
    const updatedData = [...sortedData];
    updatedData[index].checked = !updatedData[index].checked;
    setSortedData(updatedData);

    const allChecked = updatedData.every((item) => item.checked);
    setAllChecked(allChecked);
  };

  const handleCheckAll = () => {
    const updatedData = sortedData?.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setSortedData(updatedData);
    setAllChecked(!allChecked);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedData.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(sortedData.length / itemsPerPage);
  const paginationLinks = Array.from({ length: pageNumbers }, (_, i) => i + 1);

  return (
    <div>
      <div className="w-[95%] mx-auto overflow-x-auto category-bg text-body_text rounded-2xl custom-shadow relative">
        <div className="flex justify-between items-center p-6 sticky top-0 left-0">
          <h6 className="text-sm font-bold uppercase">Bids Lists</h6>
          <BsThreeDotsVertical className="text-[#9ea9b4]" />
        </div>
        <table className="w-[900px] md:w-full overflow-x-scroll">
          <thead>
            <tr className="bg-primary">
              <th className="text-start py-2 px-4">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleCheckAll}
                    className="inputShadow"
                  />
                </div>
              </th>
              <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
                <div className="flex items-center gap-2">
                  <p>Item</p>
                  <div className="flex flex-col ">
                    <VscTriangleUp
                      onClick={() => (
                        sortByProperty("title"), setShowName(!showName)
                      )}
                      className={`${
                        showName ? "opacity-20" : "opacity-100"
                      } font-bold  duration-200`}
                    />
                    <VscTriangleDown
                      onClick={() => (
                        sortByProperty("title"), setShowName(!showName)
                      )}
                      className={`${
                        showName ? "opacity-100" : "opacity-20"
                      } font-bold  duration-200`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
                <div className="flex items-center gap-2">
                  <p>Open Price</p>
                  <div className="flex flex-col ">
                    <VscTriangleUp
                      onClick={() => (
                        sortByProperty("openPrice"), setShowPrice(!showPrice)
                      )}
                      className={`${
                        showPrice ? "opacity-20" : "opacity-100"
                      } font-bold  duration-200`}
                    />
                    <VscTriangleDown
                      onClick={() => (
                        sortByProperty("openPrice"), setShowPrice(!showPrice)
                      )}
                      className={`${
                        showPrice ? "opacity-100" : "opacity-20"
                      } font-bold  duration-200`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
                <div className="flex items-center gap-2">
                  <p>Your Offer</p>
                  <div className="flex flex-col ">
                    <VscTriangleUp
                      onClick={() => (
                        sortByProperty("yourOffer"), setShowQty(!showQty)
                      )}
                      className={`${
                        showQty ? "opacity-20" : "opacity-100"
                      } font-bold  duration-200`}
                    />
                    <VscTriangleDown
                      onClick={() => (
                        sortByProperty("yourOffer"), setShowQty(!showQty)
                      )}
                      className={`${
                        showQty ? "opacity-100" : "opacity-20"
                      } font-bold  duration-200`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-start text-xs text-[#9ea9b4] ps-6 py-2">
                <div className="flex items-center gap-2">
                  <p>Recent Offer</p>
                  <div className="flex flex-col ">
                    <VscTriangleUp
                      onClick={() => (
                        sortByProperty("amount"), setShowAmt(!showAmt)
                      )}
                      className={`${
                        showAmt ? "opacity-20" : "opacity-100"
                      } font-bold  duration-200`}
                    />
                    <VscTriangleDown
                      onClick={() => (
                        sortByProperty("amount"), setShowAmt(!showAmt)
                      )}
                      className={`${
                        showAmt ? "opacity-100" : "opacity-20"
                      } font-bold  duration-200`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-end text-xs text-[#9ea9b4] pe-6 py-2 w-[300px]">
                <div className="flex items-center justify-end gap-2">
                  <p>Time Left</p>
                  <div className="flex flex-col ">
                    <VscTriangleUp
                      onClick={() => (
                        sortByProperty("time"), setShowSales(!showSales)
                      )}
                      className={`${
                        showSales ? "opacity-20" : "opacity-100"
                      } font-bold  duration-200`}
                    />
                    <VscTriangleDown
                      onClick={() => (
                        sortByProperty("time"), setShowSales(!showSales)
                      )}
                      className={`${
                        showSales ? "opacity-100" : "opacity-20"
                      } font-bold  duration-200`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((i, index) => {
              const handleClick = () => {
                navigate(`/item-detail/${i?.id}`);
              };
              return (
                <tr className="cursor-pointer" onClick={handleClick} key={i.id}>
                  <td className="py-2 px-4">
                    <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center">
                      <input
                        className="mx-auto"
                        type="checkbox"
                        checked={i.checked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </div>
                  </td>
                  <td className="ps-6 h-20 text-sm font-bold">
                    <div className="flex justify-start items-center gap-4">
                      <img src={i.itemImage} className="w-[60px] rounded" alt="" />
                      <p className="text-base">{i.title}</p>
                    </div>
                  </td>
                  <td className="ps-6 text-sm">{i.openPrice} ETH</td>
                  <td className="ps-6 text-sm">{i.yourOffer} ETH</td>
                  <td className="ps-6 text-sm">
                    <div className="flex justify-start items-center gap-4">
                      <img
                        src={i.recentOfferProfile}
                        className="w-[30px]"
                        alt=""
                      />
                      <p>{i.openPrice} ETH</p>
                    </div>
                  </td>
                  <td className="pe-6  text-end">{i.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-[95%] mx-auto flex justify-between items-center gap-2 py-5">
        <div className="text-sm text-gray-400">
          showing : {startIndex + 1} - {endIndex} of {sortedData.length}
        </div>
        <div className="flex border rounded-2xl overflow-hidden border-icon">
          {paginationLinks.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 text-[#00C5D9] text-md ${
                pageNumber === currentPage ? "bg-purple text-body_text" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
