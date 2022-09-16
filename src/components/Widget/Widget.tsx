import React from 'react'

import cart from "../../assets/img/shopping-cart.png"

type Props = {}

const Widget = (props: Props) => {
  return (
    <div className='p-[24px] rounded h-[161px] bg-white relative hover:drop-shadow-xl' >
        <div></div> 
        <div className='flex justify-between'>
            <div className="w-[30px] h-[20px] object-cover"><i className="fa-solid fa-cart-flatbed text-[20px] text-purple-300"></i></div>
            <div className="bg-green-500 rounded-[9999px] py-[2px] px-[10px] text-white text-[12px]">12% <i className="fa-solid fa-arrow-up-wide-short"></i></div>
        </div>
        <div className="absolute bottom-[24px]">
            <h1 className='text-[24px] font-[700]'>9527</h1>
            <span className='text-[14px] text-slate-300'>Items Sales</span>
        </div>
    </div>
  )
}

export default Widget