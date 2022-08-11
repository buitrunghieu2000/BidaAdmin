import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import PrivateRoute from "../utils/PrivateRoute";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
