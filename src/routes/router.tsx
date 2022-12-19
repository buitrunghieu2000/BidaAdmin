import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/404";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../pages/Auth/Login";
import Profile from "../pages/Auth/Profile";
import Category from "../pages/Category/Createcategory";

import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import Productlist from "../pages/Product/Productlist";
import Updateproduct from "../pages/Product/Updateproduct";
import Userlist from "../pages/User/Userlist";
import { updateAuthStatus } from "../Redux/authSlice";
import { RootState } from "../Redux/store";

type Props = {};

const Router = (props: Props) => {
  const auth = useSelector((state: RootState) => state.auth.isAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(updateAuthStatus(true));
    }
  }, []);

  return auth ? (
    <>
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/productlist" element={<Productlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/productlist/updateproduct/:productId"
              element={<Updateproduct />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categorylist" element={<Category />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  ) : (
    <Login />
  );
};

export default Router;
