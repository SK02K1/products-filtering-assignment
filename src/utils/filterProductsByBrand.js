export const filterProductsByBrand = ({ products, filterState }) => {
  if (filterState.selectedBrands.length === 0) {
    return products;
  }
  return products.filter(({ brand }) =>
    filterState.selectedBrands.includes(brand)
  );
};
