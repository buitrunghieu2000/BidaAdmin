import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../components/404";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";


import PrivateRoute from "../utils/privateRoute";

type Props = {};

const Router = (props: Props) => {
  let auth = { token: true };
  return (
    <>{auth.token === false ? <Login/> : (<><Navbar/>
    <div className="layout h-screen flex">
     <div className="sidebar w-[13%]"><Sidebar/></div>
     <div className="content flex-1  p-[20px]" style={{background: "#e2e8f0"}}>
     <Routes>
     <Route element={<PrivateRoute />}>
           <Route path="/" element={ auth.token === true ? <Dashboard /> : <Login/>} />
     </Route>
     <Route path="*"  element={<NotFoundPage/>} />
   </Routes>
    </div>
   </div></>) }</>
  );
};

export default Router;
