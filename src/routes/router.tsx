import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../components/404";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Productlist from "../pages/Productlist";

import Userlist from "../pages/Userlist";

import PrivateRoute from "../utils/privateRoute";

type Props = {};

const Router = (props: Props) => {
  let auth = true
  return (
        (auth ? (    <>
          <Navbar />
          <div className="layout min-h-screen flex">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div
              className="content flex-1  p-[20px]"
              style={{ background: "#e2e8f0" }}
            >
              <Routes>
                  <Route
                    path="/"
                    element={ <Dashboard /> }
                  />
                  <Route
                    path="/userlist"
                    element={<Userlist />}
                  />
                  <Route
                    path="/productlist"
                    element={ <Productlist />}
                  />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </>): <Login/>)
    
  );
};

export default Router;
