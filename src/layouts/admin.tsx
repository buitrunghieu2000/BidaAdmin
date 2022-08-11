import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Admin({ children }: Props) {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <Navbar /> */}

        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
