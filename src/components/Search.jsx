import React from "react";
import classes from "../../styles/Search.module.css";
import searchIc from "../assets/Search.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className={classes.searchCon}>
      <input
        className={classes.mainSearch}
        type="text"
        placeholder="Поиск по названию товара"
      />
      <span className={classes.searchIcon}>
        <Image src={searchIc} alt="search" />
      </span>
    </div>
  );
};

export default Search;
