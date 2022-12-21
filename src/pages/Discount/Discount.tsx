import { PlusSquareOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { IResUserList } from "../../apis/user/user.type";
import ModalCreateCategory from "../../components/Modal/ModalCategory/modalCreateCategory";
import ModalAddDiscount from "../../components/Modal/Modaldiscout/modalAddDiscount";
import Pagination from "../../components/Pangination/Pagination";
import { USER_MODEL } from "../../models/user.model";

type Props = {};

function DiscountList(props: Props) {
  let newUserList = [];
  const LIMIT = 5;
  const total = 20;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchItem, setSearchItem] = useState("");
  const [order, setOrder] = useState("ACS");
  const [showModalDiscount, setShowModalDiscount] = useState(false);

  const [discountList, setDiscountList] = useState([
    {
      id: 1,
      code: "502",
      dateStart: "12-12-2022",
      dateEnd: "15-12-2022",
      quantity: "50",
      status: "Not available",
      subject: "All",
      timeofuses: "No Limit",
      typeofdiscount: "Value",
      shipdiscount: "Bill total",
      maxdiscount: "Bill total",
      minbill: "0 vnd",
      discountvalue: "0 vnd",
    },
  ]);

  const handleRemove = (removeId: number) => {
    newUserList = discountList.filter((item: any) => item.id !== removeId);
    setDiscountList(newUserList);
  };

  const sorting = (col: string) => {
    if (order === "ACS") {
      const sorted = [...discountList].sort((a: any, b: any) =>
        a[col] > b[col] ? 1 : -1
      );
      setDiscountList(sorted);
      setOrder("DCS");
    }
    if (order === "DCS") {
      const sorted = [...discountList].sort((a: any, b: any) =>
        a[col] < b[col] ? 1 : -1
      );
      setDiscountList(sorted);
      setOrder("ACS");
    }
  };
  // console.log(searchItem)

  return (
    <div className="table w-full p-2 max-h-screen">
      <form className="flex items-center mb-[20px] w-[20%] mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <div
          className="flex p-2 items-center gap-2 bg-green-600 ml-2 rounded-lg text-white w-[70px] cursor-pointer"
          onClick={() => {
            setShowModalDiscount(true);
          }}
        >
          <span className="block select-none">ADD</span>
          <PlusSquareOutlined />
        </div>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th
              className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
              onClick={() => sorting("id")}
            >
              <div className="flex items-center justify-center">
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Code</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Date Start</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Date End</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Quantity</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Status</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Subject</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Number Of Uses
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Type Of Discount
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Ship Discount
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Max Discount
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Min Bill</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Discount Value
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {discountList.length > 0 ? (
            discountList
              .filter((value: any, index: number) => {
                if (searchItem == "") {
                  return value;
                } else if (
                  value.id.toString().includes(searchItem.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item: any, index: number) => (
                <tr
                  className="bg-gray-100 text-center border-b text-sm text-gray-600"
                  key={index}
                >
                  <td className="p-2 border-r">{item.id}</td>
                  <td className="p-2 border-r">{item.code}</td>
                  <td className="p-2 border-r">{item.dateStart}</td>
                  <td className="p-2 border-r">{item.dateEnd}</td>
                  <td className="p-2 border-r">{item.quantity}</td>
                  <td className="p-2 border-r">{item.status}</td>
                  <td className="p-2 border-r">{item.subject}</td>
                  <td className="p-2 border-r">{item.timeofuses}</td>
                  <td className="p-2 border-r">{item.typeofdiscount}</td>
                  <td className="p-2 border-r">{item.shipfee}</td>
                  <td className="p-2 border-r">{item.maxdiscount}</td>
                  <td className="p-2 border-r">{item.minbill}</td>
                  <td className="p-2 border-r">{item.discountvalue}</td>
                  <td className="flex justify-center items-center m-[10px] gap-[8px]">
                    <a className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                      Enable
                    </a>
                    <a className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                      <span onClick={() => handleRemove(item.id)}>Remove</span>
                    </a>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td>-</td>
            </tr>
          )}
        </tbody>
      </table>
      {showModalDiscount && (
        <ModalAddDiscount setShowModalDiscount={setShowModalDiscount} />
      )}
      <Pagination
        limit={LIMIT}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </div>
  );
}

export default DiscountList;
