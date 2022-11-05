import React from "react";
import ProductItem from "../../src/components/ProductItem";
import Search from "../../src/components/Search";
import { products } from "../../src/data";
import Pagination from "../../src/components/Pagination";

const ProductsPage = () => {
  return (
    <section className="productPage">
      <span className="navigation">Оформить заказ</span>
      <h2>Товары</h2>
      <Search />
      <h5>Все товары ({products.length})</h5>
      <div className="products">
        {products.map((prod) => (
          <ProductItem key={prod.id} prod={prod} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ProductsPage;
