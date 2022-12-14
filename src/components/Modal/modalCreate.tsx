import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ModalCreate({ setOpenModal }: any) {
  type FormValues = {
    name: string;
    code: number;
    price: number;
    sale: number;
    des: string;
    image: Array<any>;
  };

  const [category, setCategory] = useState('')
  const [image, setImage] = useState<any>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
  });

  const submit = (data: any, e: any) => {
    e.preventDefault();
    data.category = category;
    data.image = image;
    console.log(data);
    reset();
  };

  const handleSelect = (e: any) => {
    setCategory(e.target.value);
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[700px] p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="text-center mb-4 uppercase text-lg">Add product</div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="flex justify-between gap-4">
                <div className="left">
                  <div className="name flex justify-between items-center gap-2 mb-[20px] ">
                    <div className="">Name: </div>
                    <input
                      {...register("name")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="name flex justify-between items-center gap-2 mb-[20px]">
                    <div className="">Code: </div>
                    <input
                      {...register("code")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Code"
                    />
                  </div>

                  <div className="name flex justify-between items-center gap-2 mb-[20px]">
                    <div className="">Price: </div>
                    <input
                      {...register("price")}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Price"
                    />
                  </div>

                  <div className="name flex justify-between items-center gap-2 mb-[20px]">
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
                <div className="right flex-1">
                  <div className="flex justify-between items-center gap-2 mb-[20px]">
                    <label
                      htmlFor="countries_disabled"
                      className="block flex-0 flex-shrink-0 basis-[105px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category:
                    </label>
                    <select onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue="Viet Nam">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="US">United States</option>
                      <option value="US">United States</option>
                    </select>
                  </div>

                  <div className="name flex justify-between gap-2 mb-[20px]">
                    <label
                      aria-label="message"
                      className="block flex-0 flex-shrink-0 basis-[105px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description:
                    </label>
                    <textarea
                      {...register("des")}
                      id="message"
                      rows={4}
                      className="block shadow p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                      placeholder="Write your description here..."
                    ></textarea>
                  </div>

                  <div className="name flex items-center gap-2 mb-[20px]">
                    <div className="flex-0 flex-shrink-0 basis-[105px]">
                      Image:{" "}
                    </div>
                    <Upload.Dragger
                      multiple
                      listType="picture-card"
                      showUploadList={{
                        showRemoveIcon: true,
                        showPreviewIcon: false,
                      }}
                      accept=".png, .jpg"
                      beforeUpload={(file: any) => {
                          setImage([...image, file]);
                        return false;
                      }}
                    >
                      <Button>Upload file</Button>
                    </Upload.Dragger>
                  </div>
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
