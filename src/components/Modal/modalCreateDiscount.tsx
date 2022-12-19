import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ModalDiscount({ setOpenModalDiscount }: any) {
  type FormValues = {
    image_base64: Array<any>;
  };

  const [imagesBase64, setImagesBase64] = React.useState<any>("");

  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});

  const submit = (data: any, e: any) => {
    e.preventDefault();
    data.image = imagesBase64;
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModalDiscount(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[300px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">
              Import Discount
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <div className="name flex items-center gap-[45px] mb-[20px]">
                  <div>Image: </div>
                  <Upload.Dragger
                    maxCount={1}
                    listType="picture-card"
                    showUploadList={{
                      showRemoveIcon: true,
                      showPreviewIcon: false,
                    }}
                    accept=".png, .jpg"
                    beforeUpload={(file: any) => {
                      getBase64(file, (result: any) => {
                        const base64 = result.split(",");
                        setImagesBase64(base64[1]);
                      });
                      return false;
                    }}
                  >
                    <Button>Upload file</Button>
                  </Upload.Dragger>
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
