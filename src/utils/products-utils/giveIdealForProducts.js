const giveIdealForProducts = (products, idealFor) => {
  if (idealFor !== null) {
    return products.filter((product) => product.idealFor.includes(idealFor));
  }
  return products;
};

export { giveIdealForProducts };
