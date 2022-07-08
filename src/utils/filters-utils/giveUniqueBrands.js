const giveUniqueBrands = (products) => {
  const allBrands = products.map((product) => product.brand);
  const uniqueBrands = [...new Set(allBrands)];

  return uniqueBrands;
};

export { giveUniqueBrands };
