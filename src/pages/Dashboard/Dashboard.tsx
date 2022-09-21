import Widget from "../../components/Widget/Widget";

import { Productchart, Revanuechart } from "../../components/Chart/Chart";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="layout">
      <div className="widget grid grid-cols-4 gap-4">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
      <div className="w-100% h-[400px] mt-[20px] flex">
        <Revanuechart />
        <Revanuechart />
      </div>
      <div className="flex justify-between ">
        <div>
          <Productchart />
        </div>
        <div>
          <Productchart />
        </div>
        <div>
          <Productchart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
