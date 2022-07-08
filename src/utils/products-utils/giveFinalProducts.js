import { giveBrandedProducts } from "./giveBrandedProducts";
import { giveIdealForProducts } from "./giveIdealForProducts";
import { giveRatedProducts } from "./giveRatedProducts";
import { giveSizedProducts } from "./giveSizedProducts";
import { giveSortedProducts } from "./giveSortedProducts";

const giveFinalProducts = (products, filters) => {
  const sortedProducts = giveSortedProducts(products, filters.sortBy);

  const sizedProducts = giveSizedProducts(sortedProducts, filters.sizes);

  const brandedProducts = giveBrandedProducts(sizedProducts, filters.brands);

  const idealForProducts = giveIdealForProducts(
    brandedProducts,
    filters.idealFor
  );

  const ratedProducts = giveRatedProducts(idealForProducts, filters.ratings);

  return ratedProducts;
};

export { giveFinalProducts };
