import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../components/404";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Auth/Login";
import Productlist from "../pages/Product/Productlist";
import Profile from "../pages/Auth/Profile";
import Userlist from "../pages/User/Userlist";
import { RootState } from "../Redux/store";
import Updateproduct from "../pages/Product/Updateproduct";


type Props = {};

const Router = (props: Props) => {
  const auth = useSelector((state: RootState)=> state.auth.isAuth)
  return (
        (auth ? ( <>
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
                    <Route
                      path="/profile"
                      element={ <Profile />}
                    />
                    <Route
                      path="/productlist/updateproduct/:productId"
                      element={ <Updateproduct />}
                    />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
          </div>
        </>): <Login/>)
    
  );
};

export default Router;
