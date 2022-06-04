export const filterProductsByGender = ({ products, filterState }) => {
  if (filterState.selectedGenders.length === 0) {
    return products;
  }
  return products.filter(({ idealFor }) =>
    idealFor.some((gender) => filterState.selectedGenders.includes(gender))
  );
};
