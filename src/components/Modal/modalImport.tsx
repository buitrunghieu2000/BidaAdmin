import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ModalImport({ setOpenModalImport }: any) {
  type FormValues = {
    quantity: number;
    price: number;
  };

  const [color, setColor] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});

  const submit = (data: any, e: any) => {
    e.preventDefault();
    data.color = color;
    console.log(data);
    reset();
  };

  const handleSelect = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModalImport(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[300px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">
              Import Product
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <div className="name flex justify-center items-center gap-2 mb-[20px]">
                  <label
                    htmlFor="countries_disabled"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Colors:
                  </label>
                  <select
                    required
                    onChange={handleSelect}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue="red">Choose a color</option>
                    <option value="red">red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>

                <div className="name flex justify-center items-center  gap-2 mb-[20px]">
                  <div className="flex-1 text-end">Quantity: </div>
                  <input
                    {...register("quantity")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Quantity"
                  />
                </div>
                <div className="name flex justify-center items-center gap-2 mb-[20px]">
                  <div className="flex-1 text-end">Price: </div>
                  <input
                    {...register("price")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Price"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-[100px] p-2 rounded-sm text-center bg-green-500 relative left-[35%] text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
