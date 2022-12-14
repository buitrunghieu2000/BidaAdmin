import { PlusSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalCreate from "../../components/Modal/modalCreate";
import ModalImport from "../../components/Modal/modalImport";
import Pagination from "../../components/Pangination/Pagination";
type Props = {};

function Productlist(props: Props) {
  let newProductList = [];
  const navigate = useNavigate();
  const LIMIT = 5;
  const total = 20;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalImport, setShowModalImport] = useState(false);
  const [productList, setProductlist] = useState([
    {
      id: 1,
      img: "https://cdn.mediamart.vn/images/product/smart-tivi-4k-sony-kd-50x75k-50-inch-google-tv_2255ad8e.jpg",
      name: "Sony 4k",
      color: "red",
      price: "254.000",
      discount: "40.000",
      quantity: "40",
      sold: "20",
      rating: "20",
      status: "Instock",
      category: "Tv",
      date: "Date",
    },
  ]);
  const [searchItem, setSearchItem] = useState("");
  const [order, setOrder] = useState("ACS");

  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setProductlist(json));
  // }, []);
  // let productList:any = ()

  const handleRemove = (removeId: number) => {
    newProductList = productList.filter(
      (item: any, index: number) => item.id !== removeId
    );
    setProductlist(newProductList);
  };

  const sorting = (col: string) => {
    if (order === "ACS") {
      const sorted = [...productList].sort((a: any, b: any) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setProductlist(sorted);
      setOrder("DCS");
    }
    if (order === "DCS") {
      const sorted = [...productList].sort((a: any, b: any) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setProductlist(sorted);
      setOrder("ACS");
    }
  };

  const handleEdit = (productId: any) => {
    navigate(`/productlist/updateproduct/${productId}`);
  };

  return (
    <>
      <div className="relative table w-full p-2 h-screen">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[200px]"
              placeholder="Search"
              required
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <div
            className="flex p-2 items-center gap-2 bg-green-600 ml-2 rounded-lg text-white w-[70px] cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span className="block select-none">ADD</span>
            <PlusSquareOutlined />
          </div>
        </form>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div
                  className="flex items-center justify-center"
                  onClick={() => sorting("id")}
                >
                  ID
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Image</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div
                  className="flex items-center justify-center"
                  onClick={() => sorting("name")}
                >
                  Name
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
                <div className="flex items-center justify-center">Color</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Price</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Discount</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Quantity</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Sold</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Rating</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  Status
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
            {productList.length > 0 ? (
              productList
                .filter((value: any, index: number) => {
                  if (searchItem == "") {
                    return value;
                  } else if (
                    value.name
                      .toLowerCase()
                      .includes(searchItem.toLowerCase()) ||
                    // value.body
                    //   .toLowerCase()
                    //   .includes(searchItem.toLowerCase()) ||
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
                    <td className="p-2 border-r w-[1%]">{item.id}</td>
                    <td className="p-2 border-r h-[70px] w-[10%]">
                      <img
                        src={item.img}
                        className="w-full h-full object-contain"
                      />
                    </td>
                    <td className="p-2 border-r w-[15%]">{item.name}</td>
                    <td className="p-2 border-r w-[5%]">{item.color}</td>
                    <td className="p-2 border-r w-[10%]">{item.price}</td>
                    <td className="p-2 border-r w-[10%]">{item.discount}</td>
                    <td className="p-2 border-r w-[5%]">{item.quantity}</td>
                    <td className="p-2 border-r w-[5%]">{item.sold}</td>
                    <td className="p-2 border-r w-[5%]">{item.rating}</td>
                    <td className="p-2 border-r w-[10%]">
                      <span className="inline-block p-2 bg-successStock text-green-700 rounded-lg">
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <a className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                        <span onClick={()=> {setShowModalImport(true)}}>Import</span>
                      </a>
                      <a className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                        <span onClick={() => handleEdit(item.id)}>Edit</span>
                      </a>
                      <a className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer">
                        <span onClick={() => handleRemove(item.id)}>
                          Remove
                        </span>
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
        <div className="absolute bottom-0 left-[40%]">
          <Pagination
            limit={LIMIT}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total}
          />
        </div>
      </div>
      {showModal && <ModalCreate setOpenModal={setShowModal} />}
      {showModalImport && <ModalImport setOpenModalImport={setShowModalImport} />}
    </>
  );
}

export default Productlist;
