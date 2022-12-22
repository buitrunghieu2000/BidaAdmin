export default function ModalUpdateBill({
  setShowModalUpdateBill,
  _id,
  setReload,
}: any) {
  const handleSelect = (e: any) => {
    console.log(e.target.value);
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
                    <option value="">Select</option>
                    <option value="preparing">Preparing</option>
                    <option value="delivering">Delivering</option>
                    <option value="done">Done</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </div>
              </div>

              <div className="name flex items-center mb-[20px] gap-2">
                <label
                  aria-label="message"
                  className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reason:
                </label>
                <textarea
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
