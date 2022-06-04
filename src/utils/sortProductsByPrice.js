export const sortProductsByPrice = ({ products, sortBy }) => {
  switch (sortBy) {
    case "HIGH_TO_LOW":
      return [...products].sort(
        (a, b) => Number(b.productPrice) - Number(a.productPrice)
      );
    case "LOW_TO_HIGH":
      return [...products].sort(
        (a, b) => Number(a.productPrice) - Number(b.productPrice)
      );
    default:
      return products;
  }
};
