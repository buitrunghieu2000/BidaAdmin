import React from "react";
import Navbar from "../components/Navbar";
import Admin from "../layouts/admin";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

Dashboard.layout = Admin;
export default Dashboard;
