import styles from "./Product.module.css";

const Product = ({ product }) => {
  const {
    name,
    brand,
    originalPrice,
    discount,
    discountedPrice,
    rating,
    sizes,
    images,
  } = product;

  return (
    <div className={styles["product"]}>
      <div className={styles["product-img-container"]}>
        <img className={styles["product-img"]} src={images[0]} alt={name} />
      </div>
      <div className={styles["product-details"]}>
        <div className={styles["product-details-primary"]}>
          <div className={styles["product-brand"]}>{brand}</div>
          <div className={styles["product-name"]}>{name}</div>
        </div>
        <div className={styles["product-details-rating"]}>
          <span className={[styles["product-rating"]]}>{rating}</span>
          <span className={`${styles["product-rating-icon"]} material-icons`}>
            star
          </span>
        </div>
        <div className={styles["product-details-price"]}>
          <div className={styles["product-discounted-price"]}>
            ₹{discountedPrice}
          </div>
          <div className={styles["product-original-price"]}>
            ₹{originalPrice}
          </div>
          <div className={styles["product-discount"]}>{discount}% off</div>
        </div>
        <div className={styles["product-details-sizes"]}>
          <span className={styles["product-sizes-title"]}>Size</span>
          <span className={styles["product-sizes"]}>{sizes.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export { Product };
