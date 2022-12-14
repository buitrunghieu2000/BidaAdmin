import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ModalImport({ setOpenModalImport }: any) {
  type FormValues = {
    name: string;
    code: number;
    price: number;
    sale: number;
    des: string;
    image: Array<any>;
  };

  const [category, setCategory] = useState("");
  const [image, setImage] = useState<any>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});

  const submit = (data: any, e: any) => {
    e.preventDefault();
    data.category = category;
    data.image = image;
    console.log(data);
    reset();
  };

  const handleSelect = (e: any) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModalImport(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[400px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">
              Import Product
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <div className="name flex justify-center items-center gap-2 mb-[20px] ">
                  <div className="">Name: </div>
                  <input
                    {...register("name")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Product Name"
                  />
                </div>
                <div className="name flex justify-center items-center gap-2 mb-[20px]">
                  <div className="">Code: </div>
                  <input
                    {...register("code")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Code"
                  />
                </div>

                <div className="name flex justify-center items-center gap-2 mb-[20px]">
                  <div className="">Price: </div>
                  <input
                    {...register("price")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Price"
                  />
                </div>

                <div className="name flex justify-center items-center gap-2 mb-[20px]">
                  <div className="">Sale: </div>
                  <input
                    {...register("sale")}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Sale"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-[100px] p-2 rounded-sm text-center bg-green-500 relative left-[40%] text-white"
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
