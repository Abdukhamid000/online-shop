import React from "react";
import classes from "../../styles/Navbar.module.css";
import personal from "../assets/personal.svg";
import Image from "next/image";
import notify from "../assets/notification.svg";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className="container d-flex">
        <h3>Logo</h3>
        <Image src={notify} alt="" />
        <button className={classes.headbtn}>
          Личный кабинет
          <span>
            <Image src={personal} alt="" />
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
