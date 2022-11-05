import React from "react";
import { menus } from "../data";
import SidebarItems from "./SidebarItems";
import classes from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  console.log(menus);
  return (
    <div className={classes.bg}>
      <ul className={classes.items}>
        {menus.map((menu) => (
          <SidebarItems key={menu.id} menu={menu} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
