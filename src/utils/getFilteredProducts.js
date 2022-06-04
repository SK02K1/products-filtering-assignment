export const getFilteredProducts = (...filterFunctions) => ({
  products,
  filterState
}) => {
  return filterFunctions.reduce(
    (filteredProducts, filterFunction) =>
      filterFunction({ products: filteredProducts, filterState }),
    products
  );
};
