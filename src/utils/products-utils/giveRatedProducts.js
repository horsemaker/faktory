import { RATINGS_3_AND_MORE, RATINGS_4_AND_MORE } from "../../constants";

const giveRatedProducts = (products, ratings) => {
  if (ratings === RATINGS_4_AND_MORE) {
    return products.filter((product) => product.rating >= 4);
  } else if (ratings === RATINGS_3_AND_MORE) {
    return products.filter((product) => product.rating >= 3);
  }

  return products;
};

export { giveRatedProducts };
