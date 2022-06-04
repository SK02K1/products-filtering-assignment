export const filterProductsBySize = ({ products, filterState }) => {
  if (filterState.selectedSizes.length === 0) {
    return products;
  }
  return products.filter(({ sizes }) =>
    sizes.some((size) => filterState.selectedSizes.includes(size))
  );
};
