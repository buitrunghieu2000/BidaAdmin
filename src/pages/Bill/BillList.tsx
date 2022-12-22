import { useState } from "react";
import ModalBill from "../../components/Modal/ModalBill/modalBill";
import ModalUpdateBill from "../../components/Modal/ModalBill/modalUpdateBill";
import Pagination from "../../components/Pangination/Pagination";

type Props = {};

function BillList(props: Props) {
  let newBillList = [];
  const LIMIT = 5;
  const total = 20;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showModalBill, setShowModalBill] = useState(false);
  const [showModalUpdateBill, setShowModalUpdateBill] = useState(false);
  const [billList, setBillList] = useState([
    {
      id: 1,
      code: "502",
      name: "Binh Pham",
      phone: "0925100721",
      email: "binhpham@gmail.com",
      address: "Sg",
      sale: "50%",
      shipfee: "50000",
      total: "100000",
      status: "Is delivering",
      payed: "not pay",
      refund: "no",
      authorize: "yes",
    },
  ]);
  const [searchItem, setSearchItem] = useState("");
  const [order, setOrder] = useState("ACS");

  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setBillList(json));
  // }, []);

 

  const sorting = (col: string) => {
    if (order === "ACS") {
      const sorted = [...billList].sort((a: any, b: any) =>
        a[col] > b[col] ? 1 : -1
      );
      setBillList(sorted);
      setOrder("DCS");
    }
    if (order === "DCS") {
      const sorted = [...billList].sort((a: any, b: any) =>
        a[col] < b[col] ? 1 : -1
      );
      setBillList(sorted);
      setOrder("ACS");
    }
  };
  // console.log(searchItem)

  const handleSelect = (e: any) => {
    console.log(e.target.value);
  };

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
        <div className="ml-[20px] w-[250px]">
          <select
            onChange={handleSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="preparing">Preparing</option>
            <option value="delivering">Delivering</option>
            <option value="done">Done</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th
              className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
            >
              <div className="flex items-center justify-center">
                ID

              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Code</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Name</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Phone</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Email</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Address</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Sold</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Fhip Fee</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Toltal</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Status</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Payed</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Refund</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Authorize</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {billList?.length > 0 ? (
            billList
              .filter((value: any, index: number) => {
                if (searchItem == "") {
                  return value;
                } else if (
                  value.name.toString().includes(searchItem.toLowerCase())
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
                  <td className="p-2 border-r">{item.name}</td>
                  <td className="p-2 border-r">{item.phone}</td>
                  <td className="p-2 border-r">{item.email}</td>
                  <td className="p-2 border-r">{item.address}</td>
                  <td className="p-2 border-r">{item.sale}</td>
                  <td className="p-2 border-r">{item.shipfee}</td>
                  <td className="p-2 border-r">{item.total}</td>
                  <td className="p-2 border-r">{item.status}</td>
                  <td className="p-2 border-r">{item.payed}</td>
                  <td className="p-2 border-r">{item.refund}</td>
                  <td className="p-2 border-r">{item.authorize}</td>
                  <td className="flex justify-center items-center m-[10px] gap-[8px]">
                    <a
                      onClick={() => {
                        setShowModalBill(true);
                      }}
                      className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer"
                    >
                      View
                    </a>
                    <a
                      onClick={() => {setShowModalUpdateBill(true)}}
                      className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer"
                    >
                      Update
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
      {showModalBill && <ModalBill setShowModalBill={setShowModalBill} />}
      {showModalUpdateBill && <ModalUpdateBill setShowModalUpdateBill={setShowModalUpdateBill} />}
      <Pagination
        limit={LIMIT}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </div>
  );
}

export default BillList;
