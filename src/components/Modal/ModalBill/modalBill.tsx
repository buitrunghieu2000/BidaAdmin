export default function ModalBill({ setShowModalBill, _id, setReload}: any) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setShowModalBill(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-[700px] p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="text-center mb-4 uppercase text-lg">Order List</div>
            <div className="container h-[450px] overflow-auto">
                <div className="item rounded-lg border border-black-200 flex gap-[20px] p-4 mb-2  ">
                    <div className="flex-1 h-[200px]">
                        <img src="https://tieusunhanvat.info/wp-content/uploads/2021/08/tsnv-tieu-su-Satoru-Gojoi-00.webp" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <span className="block mb-2 text-2xl">Gojo satoru</span>
                        <span className="block mb-2 text-gray-400">Color: Black</span>
                        <span className="block mb-2 text-gray-400">Quantity: 30</span>
                        <span className="block mb-2 text-gray-400">Price: 20000</span>
                        <span className="block mb-2 text-gray-400">Discount: 10000</span>
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
