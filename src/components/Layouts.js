import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import React from "react";

const Layouts = ({ children }) => {
  const style = {
    background: "#F3F5F8",
    marginTop: "90px",
    borderRadius: "6px",
    padding: "20px 28px",
    width: "calc(100% - 263px - 80px)",
    marginLeft: "auto",
    marginRight: "60px",
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main style={style}>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
