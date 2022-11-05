import React from "react";
import classes from "../../styles/Pagination.module.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className={`${classes.pagination} d-flex`}>
      <span>
        <Image src={left} alt="leftArrow" />
      </span>
      <div className={classes.numbers}>
        <small> 1 </small>
        <small> 2 </small>
        <small> 3 </small>
        <small> 4 </small>
        ...
        <small> 5 </small>
        <small> 6 </small>
      </div>
      <span>
        <Image src={right} alt="rightArrow" />
      </span>
    </div>
  );
};

export default Pagination;
