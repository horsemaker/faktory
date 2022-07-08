import React from "react";
import data from "../../data/products.json";
import {
  CHANGE_BRANDS,
  CHANGE_IDEAL_FOR,
  CHANGE_RATINGS,
  CHANGE_SIZES,
  CHANGE_SORT_BY,
  CLEAR_FILTERS,
  L,
  M,
  MEN,
  RATINGS_3_AND_MORE,
  RATINGS_4_AND_MORE,
  S,
  SORT_BY_HIGH_TO_LOW,
  SORT_BY_LOW_TO_HIGH,
  WOMEN,
  XL,
  XS,
  XXL,
} from "../../constants";
import { useFilters } from "../../contexts";
import { giveUniqueBrands } from "../../utils";
import styles from "./Filters.module.css";

const Filters = () => {
  const { filters, dispatchFilters } = useFilters();
  const { sortBy, sizes, brands, idealFor, ratings } = filters;

  const { products } = data;
  const uniqueBrands = giveUniqueBrands(products);

  return (
    <div className={styles["filters-section"]}>
      <div className={styles["filters-title"]}>
        <h2>Filters</h2>
        <button
          className={styles["filters-clear-btn"]}
          onClick={() => dispatchFilters({ type: CLEAR_FILTERS })}
        >
          Clear All
        </button>
      </div>
      <div className={styles["filters-option"]}>
        <h3>Sort By</h3>
        <div className={styles["filters-options"]}>
          <label className={styles["filters-label"]} htmlFor="sortBy-lowToHigh">
            <input
              type="radio"
              name="sortBy"
              id="sortBy-lowToHigh"
              checked={sortBy === SORT_BY_LOW_TO_HIGH}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_SORT_BY,
                  payload: SORT_BY_LOW_TO_HIGH,
                })
              }
            />
            Price - Low To High
          </label>
          <label className={styles["filters-label"]} htmlFor="sortBy-highToLow">
            <input
              type="radio"
              name="sortBy"
              id="sortBy-highToLow"
              checked={sortBy === SORT_BY_HIGH_TO_LOW}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_SORT_BY,
                  payload: SORT_BY_HIGH_TO_LOW,
                })
              }
            />
            Price - High to Low
          </label>
        </div>
      </div>
      <div className={styles["filters-option"]}>
        <h3>Sizes</h3>
        <div className={styles["filters-options"]}>
          <label className={styles["filters-label"]} htmlFor="sizes-xs">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-xs"
              checked={sizes.some((size) => size === XS)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XS })
              }
            />
            XS
          </label>
          <label className={styles["filters-label"]} htmlFor="sizes-s">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-s"
              checked={sizes.some((size) => size === S)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: S })
              }
            />
            S
          </label>
          <label className={styles["filters-label"]} htmlFor="sizes-m">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-m"
              checked={sizes.some((size) => size === M)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: M })
              }
            />
            M
          </label>
          <label className={styles["filters-label"]} htmlFor="sizes-l">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-l"
              checked={sizes.some((size) => size === L)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: L })
              }
            />
            L
          </label>
          <label className={styles["filters-label"]} htmlFor="sizes-xl">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-xl"
              checked={sizes.some((size) => size === XL)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XL })
              }
            />
            XL
          </label>
          <label className={styles["filters-label"]} htmlFor="sizes-xxl">
            <input
              type="checkbox"
              name="sizes"
              id="sizes-xxl"
              checked={sizes.some((size) => size === XXL)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XXL })
              }
            />
            XXL
          </label>
        </div>
      </div>
      <div className={styles["filters-option"]}>
        <h3>Brands</h3>
        <div className={styles["filters-options"]}>
          {uniqueBrands.map((brand) => (
            <label
              key={brand}
              className={styles["filters-label"]}
              htmlFor={`brands-${brand}`}
            >
              <input
                type="checkbox"
                name="brands"
                id={`brands-${brand}`}
                checked={brands.some((filtersBrand) => filtersBrand === brand)}
                onChange={() =>
                  dispatchFilters({ type: CHANGE_BRANDS, payload: brand })
                }
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      <div className={styles["filters-option"]}>
        <h3>Ideal For</h3>
        <div className={styles["filters-options"]}>
          <label className={styles["filters-label"]} htmlFor="idealFor-men">
            <input
              type="radio"
              name="idealFor"
              id="idealFor-men"
              checked={idealFor === MEN}
              onChange={() =>
                dispatchFilters({ type: CHANGE_IDEAL_FOR, payload: MEN })
              }
            />
            Men
          </label>
          <label className={styles["filters-label"]} htmlFor="idealFor-women">
            <input
              type="radio"
              name="idealFor"
              id="idealFor-women"
              checked={idealFor === WOMEN}
              onChange={() =>
                dispatchFilters({ type: CHANGE_IDEAL_FOR, payload: WOMEN })
              }
            />
            Women
          </label>
        </div>
      </div>
      <div className={styles["filters-option"]}>
        <h3>Ratings</h3>
        <div className={styles["filters-options"]}>
          <label className={styles["filters-label"]} htmlFor="ratings-4">
            <input
              type="radio"
              name="ratings"
              id="ratings-4"
              checked={ratings === RATINGS_4_AND_MORE}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_RATINGS,
                  payload: RATINGS_4_AND_MORE,
                })
              }
            />
            4 & more
          </label>
          <label className={styles["filters-label"]} htmlFor="ratings-3">
            <input
              type="radio"
              name="ratings"
              id="ratings-3"
              checked={ratings === RATINGS_3_AND_MORE}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_RATINGS,
                  payload: RATINGS_3_AND_MORE,
                })
              }
            />
            3 & more
          </label>
        </div>
      </div>
    </div>
  );
};

export { Filters };
