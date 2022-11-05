import React from "react";
import classes from "../../styles/Checkout.module.css";
import Slider from "../../src/components/Slider";
import Details from "../../src/components/Details";
import Stock from "../../src/components/Stock";

const CheckoutPage = () => {
  return (
    <section className="checkoutPage">
      <div className={classes.checkBg}>
        <h2>Смартфон Apple iPhone 11 128 Gb Slim Box черный</h2>
        <div className={classes.productDetail}>
          <Slider />
          <Details />
        </div>
        <Stock />
      </div>
    </section>
  );
};

export default CheckoutPage;
