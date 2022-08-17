import React from "react";
import Widget from "../components/Widget/Widget";

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
   
    </div>
  );
};

export default Dashboard;
