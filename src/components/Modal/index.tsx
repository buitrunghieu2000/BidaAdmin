import { Button, Upload } from "antd";
import React from "react";

export default function Modal({ setOpenModal }: any) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[700px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4">Add product</div>
            <div className="flex justify-between gap-4">
              <div className="left">
                <div className="name flex justify-between items-center gap-2 mb-[20px] ">
                  <div className="">Name: </div>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="name flex justify-between items-center gap-2 mb-[20px]">
                  <div className="">Code: </div>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="name flex justify-between items-center gap-2 mb-[20px]">
                  <div className="">Price: </div>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="name flex justify-between items-center gap-2 mb-[20px]">
                  <div className="">Sale: </div>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="right flex-1">
                <div className="flex justify-between items-center gap-2 mb-[20px]">
                  <div className="">Product Name: </div>
                  <input
                    className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="name flex justify-between gap-2 mb-[20px]">
                  <label
                    aria-label="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block shadow p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>

                <div className="name flex items-center gap-2 mb-[20px]">
                  <div className="">Image: </div>
                  <Upload.Dragger
                    multiple
                    listType="picture-card"
                    showUploadList={{
                      showRemoveIcon: true,
                      showPreviewIcon: false,
                    }}
                    accept=".png, .jpg"
                    beforeUpload={(file: any) => {
                      //   setImage([...image, file]);
                      return false;
                    }}
                  >
                    <Button>Upload file</Button>
                  </Upload.Dragger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
