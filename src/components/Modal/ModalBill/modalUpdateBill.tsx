import { useState } from "react";
import { useForm } from "react-hook-form";
import billApi from "../../../apis/bill/bill.api";

export default function ModalUpdateBill({ setShowModalUpdateBill, _id }: any) {
  const [statusBill, setStatusBill] = useState("Ordered");

  const { register, handleSubmit } = useForm<any>();

  const handleSelect = (e: any) => {
    console.log(e.target.value);
    setStatusBill(e.target.value);
  };

  const submit = async(data: any, e: any) => {
    // console.log(data);
    const payload = {
      _id: _id,
      status: statusBill,
      desc: data.desc,
    };

    const updateResult = await billApi.updateBill(payload);
    console.log(payload)
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModalUpdateBill(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[400px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">Order List</div>
            <div className="container ">
              <div className="flex items-center mb-4">
                <label htmlFor="" className="w-[50px]">
                  Status:
                </label>
                <div className="ml-[20px] flex-1">
                  <select
                    onChange={handleSelect}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Ordered">Ordered</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Delivering">Delivering</option>
                    <option value="Done">Done</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </div>
              </div>
              <form onSubmit={handleSubmit(submit)}>
                <div className="name flex items-center mb-[20px] gap-2">
                  <label
                    aria-label="message"
                    className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Reason:
                  </label>
                  <textarea
                    {...register("desc")}
                    id="message"
                    rows={4}
                    className="block shadow p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                    placeholder="Write your description here..."
                  ></textarea>
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
      </div>
    </>
  );
}
