import { PlusSquareOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { IResUserList } from "../../apis/user/user.type";
import ModalCreateCategory from "../../components/Modal/ModalCategory/modalCreateCategory";
import Pagination from "../../components/Pangination/Pagination";
import { USER_MODEL } from "../../models/user.model";

type Props = {};

function Category(props: Props) {
  let newUserList = [];
  const LIMIT = 5;
  const total = 20;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showModalCreateCategory, setShowModalCreateCategory] = useState(false);
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "phone",
      quantity: 30,
    },
    {
      id: 2,
      name: "desktop",
      quantity: 60,
    },
    {
      id: 3,
      name: "laptop",
      quantity: 90,
    },
    {
      id: 4,
      name: "laptop",
      quantity: 90,
    },
  ]);
  const [searchItem, setSearchItem] = useState("");
  const [order, setOrder] = useState("ACS");

  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setUserList(json));
  // }, []);

  const handleRemove = (removeId: number) => {
    newUserList = userList.filter(
      (item: any, index: number) => item.id !== removeId
    );
    setUserList(newUserList);
  };

  const sorting = (col: string) => {
    if (order === "ACS") {
      const sorted = [...userList].sort((a: any, b: any) =>
        a[col] > b[col] ? 1 : -1
      );
      setUserList(sorted);
      setOrder("DCS");
    }
    if (order === "DCS") {
      const sorted = [...userList].sort((a: any, b: any) =>
        a[col] < b[col] ? 1 : -1
      );
      setUserList(sorted);
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
            setShowModalCreateCategory(true);
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
            <th
              className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
            >
              <div className="flex items-center justify-center">
                Name
              </div>
            </th>
            <th
              className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
              onClick={() => {
                sorting("quantity");
              }}
            >
              <div className="flex items-center justify-center">
                Quantity
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
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 ? (
            userList
              .filter((value: any, index: number) => {
                if (searchItem == "") {
                  return value;
                } else if (
                  value.id.toString().includes(searchItem.toLowerCase()) ||
                  value.name.toLowerCase().includes(searchItem.toLowerCase()) ||
                  value.quantity.toString().includes(searchItem.toLowerCase())
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
                  <td className="p-2 border-r">{item.name}</td>
                  <td className="p-2 border-r">{item.quantity}</td>
                  <td>
                    <a className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                      Edit
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
      {showModalCreateCategory && (
        <ModalCreateCategory
          setOpenModalCreateCategory={setShowModalCreateCategory}
        />
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

export default Category;
