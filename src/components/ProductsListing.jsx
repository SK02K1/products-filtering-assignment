import { SimpleGrid, GridItem, Heading, Text } from "@chakra-ui/react";
import products from "backend/db/products";
import { ProductCard } from "components";
import { useFilter } from "contexts";
import {
  getFilteredProducts,
  sortProductsByPrice,
  filterProductsBySize,
  filterProductsByBrand,
  filterProductsByGender
} from "utils";

export const ProductsListing = () => {
  const { filterState } = useFilter();
  const { sortBy } = filterState;

  const sortedProducts = sortProductsByPrice({ products, sortBy });

  const filteredProducts = getFilteredProducts(
    filterProductsBySize,
    filterProductsByBrand,
    filterProductsByGender
  )({
    products: sortedProducts,
    filterState
  });

  const numberOfProducts = filteredProducts.length;

  return (
    <GridItem colSpan={13}>
      {Boolean(numberOfProducts) && (
        <Text my={4} fontSize="md">
          (Showing {numberOfProducts} Products)
        </Text>
      )}
      <SimpleGrid
        minChildWidth="15rem"
        rowGap="8"
        columnGap="2"
        justifyItems="center"
        justifySelf="left"
        px={4}
      >
        {numberOfProducts ? (
          filteredProducts.map((productData) => (
            <ProductCard key={productData._id} productData={productData} />
          ))
        ) : (
          <Heading fontSize="xl">No Product Found!</Heading>
        )}
      </SimpleGrid>
    </GridItem>
  );
};
