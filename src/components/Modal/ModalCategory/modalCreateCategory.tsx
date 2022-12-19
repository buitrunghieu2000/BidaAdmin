import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import categoryApi from "../../../apis/category/categoryApi";
import Specs from "./specs";

export default function ModalCreateCategory({
  setOpenModalCreateCategory,
}: any) {
  type FormValues = {
    name: string;
    slug: string;
  };

  const [category, setCategory] = useState("");
  const [imagesBase64, setImagesBase64] = React.useState<any>("");
  const [iconBase64, setIconBase64] = React.useState<any>("");

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

    const nameCategory = data.name;
    delete data.name;
    var arr1 = Object.keys(data);
    var arr2 = Object.values(data);
    let values: any[] = [];
    let name: any[] = [];
    let temp: any[] = [];
    let specs_model: any[] = [];

    let newArray: any[] = [];
    arr1.forEach((item, index) => {
      item.includes("name") ? name.push(arr2[index]) : temp.push(arr2[index]);
    });
    temp.forEach((item) => {
      const a = item.split(";");
      a.map((item: any) => newArray.push({ value: item }));
      values.push(newArray);
      newArray = [];
    });
    name.forEach((item, index) => {
      if (item) {
        let obj = { name: item, values: values[index] };
        specs_model.push(obj);
      }
    });
    data.name = nameCategory;
    data.specsModel = specs_model;

    const payload = {
      name: data.name,
      specsModel: data.specsModel,
      image_base64: imagesBase64,
      icon_base64: iconBase64,
      slug: data.slug,
    };

    (async () => {
      const result = await categoryApi.createCategory(payload);
      console.log(result);
    })();

    console.log(payload);
    reset();
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModalCreateCategory(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[500px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">
              Import Category
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <div className="name flex items-center justify-center gap-[10px] mb-[20px]">
                  <div>
                    <div className="text-center">Image: </div>
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
                      <Button>Upload Img</Button>
                    </Upload.Dragger>
                  </div>
                  <div>
                    <div className="text-center">Icon: </div>
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
                          setIconBase64(base64[1]);
                        });
                        return false;
                      }}
                    >
                      <Button>Upload Icon</Button>
                    </Upload.Dragger>
                  </div>
                </div>
              </div>
              <div className="name flex justify-center items-center gap-2 mb-[20px]">
                <input
                  {...register("name")}
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name Category"
                />
                <input
                  {...register("slug")}
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Slug"
                />
              </div>
              <ExtendableInputs register={register} />
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

const ExtendableInputs = ({ register }: { register: any }) => {
  const [inputCount, setInputCount] = React.useState(1);

  const handleAddInput = () => setInputCount(inputCount + 1);
  const handleSubInput = () => setInputCount(inputCount - 1);

  return (
    <>
      <div className="flex flex-col items-center mb-[30px] gap-[10px]">
        <label>Specifications</label>
        {[...Array(inputCount)].map((_, index) => (
          <Specs register={register} id={index + 1} key={index} />
        ))}
        {/* <Specs /> */}
        <div className="flex gap-[30px]">
          <button
            className="w-[100px] p-2 rounded-sm text-center bg-green-500  text-white"
            type="button"
            onClick={handleAddInput}
          >
            Add
          </button>
          <button
            className="w-[100px] p-2 rounded-sm text-center bg-red-500  text-white"
            type="button"
            disabled={inputCount === 0}
            onClick={handleSubInput}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
