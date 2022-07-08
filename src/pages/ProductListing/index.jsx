import React from "react";
import { Filters, Products } from "../../layouts";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  return (
    <div className={styles["page-product-listing"]}>
      <Filters />
      <Products />
    </div>
  );
};

export { ProductListing };
