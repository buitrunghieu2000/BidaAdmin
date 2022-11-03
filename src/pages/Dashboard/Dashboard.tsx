import Widget from "../../components/Widget/Widget";

import { Productchart, Revanuechart } from "../../components/Chart/Chart";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="layout">
      <div className="widget grid grid-cols-4 gap-4">
        <Widget percent={12} quantity={400} icon={"fa-solid fa-tv"} />
        <Widget percent={8} quantity={1200} icon={"fa-solid fa-mobile"} />
        <Widget percent={20} quantity={500} icon={"fa-solid fa-laptop"} />
        <Widget percent={5} quantity={100} icon={"fa-solid fa-desktop"} />

      </div>
      <div className="w-100% h-[400px] mt-[20px] flex">
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
