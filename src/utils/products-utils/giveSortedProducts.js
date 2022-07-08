import { SORT_BY_LOW_TO_HIGH, SORT_BY_HIGH_TO_LOW } from "./../../constants";

const giveSortedProducts = (products, sortBy) => {
  if (sortBy === SORT_BY_LOW_TO_HIGH) {
    return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortBy === SORT_BY_HIGH_TO_LOW) {
    return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  return products;
};

export { giveSortedProducts };
