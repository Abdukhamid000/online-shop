import React from "react";
import classes from "../../styles/Stock.module.css";
import sale from "../assets/sale.svg";
import bundle from "../assets/bundle.svg";
import Image from "next/image";

const Stock = () => {
  return (
    <div className={classes.stockCon}>
      <h5>Акции</h5>
      <div className={classes.col}>
        <div className={classes.top}>
          <span className="badge">
            <Image src={sale} alt="sale" />
          </span>
          <p>Обменяй свой старый айфон и получи скидку на новый</p>
          <label>
            <input type="checkbox" />
          </label>
        </div>
        <small>- 400 000 сум</small>
      </div>
      <div className={classes.col}>
        <div className={classes.top}>
          <span className="bundle">
            <Image src={bundle} alt="bundle" />
          </span>
          <p>Обменяй свой старый айфон и получи скидку на новый</p>
          <label>
            <input type="checkbox" />
          </label>
        </div>
        <small>- 400 000 сум</small>
      </div>
      <div className={classes.col}>
        <div className={classes.top}>
          <span className="badge">
            <Image src={sale} alt="sale" />
          </span>
          <p>Обменяй свой старый айфон и получи скидку на новый</p>
          <label>
            <input type="checkbox" checked />
          </label>
        </div>
        <small>- 400 000 сум</small>
      </div>
      <div className={classes.col}>
        <div className={classes.top}>
          <span className="bundle">
            <Image src={bundle} alt="bundle" />
          </span>
          <p>Обменяй свой старый айфон и получи скидку на новый</p>
          <label>
            <input type="checkbox" checked />
          </label>
        </div>
        <small>- 400 000 сум</small>
      </div>
      <button className={classes.btn}>Добавить в корзину</button>
    </div>
  );
};

export default Stock;
