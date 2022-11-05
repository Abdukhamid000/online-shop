import React from "react";
import classes from "../../styles/Slider.module.css";
import Image from "next/image";
import photo from "../assets/images/photo.png";
import bundle from "../assets/bundle.svg";
import sale from "../assets/sale.svg";

const Slider = () => {
  return (
    <div className={classes.sliderCon}>
      <div className={classes.icon}>
        <span>
          <Image src={bundle} alt="" />
        </span>
        <span>
          <Image src={sale} alt="" />
        </span>
        <span>
          <Image src={bundle} alt="" />
        </span>
        <span>
          <Image src={sale} alt="" />
        </span>
      </div>
      <Image src={photo} alt="phone" />
    </div>
  );
};

export default Slider;
