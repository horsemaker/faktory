import React from "react";
import { Product } from "../../components";
import data from "../../data/products.json";
import { useFilters } from "../../contexts";
import { giveFinalProducts } from "../../utils";
import styles from "./Products.module.css";

const Products = () => {
  const { products } = data;
  const { filters } = useFilters();

  const finalProducts = giveFinalProducts(products, filters);

  return (
    <div className={styles["products-section"]}>
      <h1>All Products ({finalProducts.length})</h1>
      <div className={styles["products"]}>
        {finalProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { Products };
