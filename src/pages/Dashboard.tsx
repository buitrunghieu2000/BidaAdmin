import React from "react";
import Widget from "../components/Widget/Widget";
import hero from "../assets/img/happy.svg"

import { PieChart } from "recharts";
import { Piechart } from "../components/Productchart/Piechart";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="layout">
      <div className="widget grid grid-cols-4 gap-4">
      <Widget/> 
      <Widget/> 
      <Widget/> 
      <Widget/> 
      </div>
      <div>
        <Piechart/>
      </div>
      {/* <div className="hero grid grid-cols-4 gap-4 mt-[25px] ">
        <div className="col-span-2 card bg-teal-400 border-teal-400 shadow-md text-white rounded h-[208px] p-[24px]">
          <div className="card-body flex flex-row justify-center">
            <div className="w-[160px] h-[133px]">
              <img src={hero} alt="" />
            </div>
            <div className="py-2 ml-10">
                <h1 className="h6">Good Job, Bida!</h1>
                <p className="text-white text-xs">You've finished all of your tasks for this week.</p>

                <ul className="mt-4">
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Finish Dashboard Design</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Fix Issue #74</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> Publish version 1.0.6</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-slate-600 text-center text-[14px] py-[16px] px-[24px] text-white mb-6">Hi it's me </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="">123</div>
            <div className="">123</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
