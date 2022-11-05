import React from "react";
import classes from "../../styles/ProductItem.module.css";
import Image from "next/image";
import bundle from "../assets/bundle.svg";
import sale from "../assets/sale.svg";

const ProductItem = ({ prod }) => {
  return (
    <div className={classes.items}>
      <div className={classes.card}>
        <div className={classes.badge}>
          <span>
            <Image src={bundle} alt="bundle" />
          </span>
          <span>
            <Image src={sale} alt="sale" />
          </span>
        </div>
        <Image src={prod.img} alt="img" />
      </div>
      <p style={{ fontSize: "15px" }}>{prod.productName}</p>
      <strong>{prod.price}</strong>

      <span className={classes.loan}>{prod.termLoan}</span>
    </div>
  );
};

export default ProductItem;
