import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import discountApi from "../../../apis/discount/discount.api";

export default function ModalAddDiscount({ setShowModalDiscount }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({});

  const submit = (data: any, e: any) => {
    e.preventDefault();
    const payload = {
      code: data.code,
      enable: Boolean(data.enable),
      dateEnd: data.dateEnd,
      dateStart: data.dateStart,
      quantity: Number(data.quantity),
      minPrice: Number(data.minPrice),
      maxPrice: Number(data.maxPrice),
      is_percent: Boolean(data.is_percent),
      is_ship: Boolean(data.is_ship),
      is_oic: Boolean(data.is_oic),
      is_oid: Boolean(data.is_oid),
      value: Number(data.value),
    };
    console.log(payload);
    (async()=> {
        const result  = await discountApi.addDiscount(payload)
        console.log(result);
    })()
    reset();
  };

  const handleSelect = (e: any) => {
    if (e.target.value !== "Select") {
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModalDiscount(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[700px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">
              Import Discount
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="flex gap-4">
                <div>
                  <div className="name flex justify-center items-center  gap-2 mb-[20px]">
                    <div className="flex-1 text-end">Code: </div>
                    <input
                      {...register("code")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Code"
                    />
                  </div>
                  <div className="name flex justify-center items-center gap-2 mb-[20px]">
                    <div className="flex-1 text-end">Max Price: </div>
                    <input
                      {...register("maxPrice")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Max Price"
                    />
                  </div>
                  <div className="name flex justify-center items-center gap-2 mb-[20px]">
                    <div className="flex-1 text-end">Min Price: </div>
                    <input
                      {...register("minPrice")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Min Price"
                    />
                  </div>
                  <div className="name flex justify-center items-center gap-2 mb-[20px]">
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
                    <div className="flex-1 text-end">Value: </div>
                    <input
                      {...register("value")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Value"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2  ">
                    <label
                      htmlFor="countries_disabled"
                      className="block w-[200px] text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enable
                    </label>
                    <select
                      {...register("enable")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option key="1" value="">
                        false
                      </option>
                      <option key="2" value="true">
                        true
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center gap-4 mb-2  ">
                    <label
                      htmlFor="countries_disabled"
                      className="block w-[200px] text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Percent Type
                    </label>
                    <select
                      {...register("is_percent")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option key="1" value="">
                        false
                      </option>
                      <option key="2" value="true">
                        true
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center gap-4 mb-2  ">
                    <label
                      htmlFor="countries_disabled"
                      className="block w-[200px] text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ship type
                    </label>
                    <select
                      {...register("is_ship")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option key="1" value="">
                        false
                      </option>
                      <option key="2" value="true">
                        true
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center gap-4 mb-2  ">
                    <label
                      htmlFor="countries_disabled"
                      className="block w-[200px] text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Customer type
                    </label>
                    <select
                      {...register("is_oic")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option key="1" value="">
                        false
                      </option>
                      <option key="2" value="true">
                        true
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center gap-4 mb-2  ">
                    <label
                      htmlFor="countries_disabled"
                      className="block w-[200px] text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Expired
                    </label>
                    <select
                      {...register("is_oid")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option key="1" value="">
                        false
                      </option>
                      <option key="2" value="true">
                        true
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="countries_disabled"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date Start
                    </label>
                    <input
                      type="date"
                      id="dateStart"
                      {...register("dateStart")}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="countries_disabled"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date End
                    </label>
                    <input
                      type="date"
                      id="dateEnd"
                      {...register("dateEnd")}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-[100px] p-2 rounded-sm text-center bg-green-500 relative left-[40%] mt-[20px] text-white"
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
