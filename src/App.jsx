import "./styles.css";
import { SimpleGrid } from "@chakra-ui/react";
import { FilterBar, ProductsListing } from "components";

export default function App() {
  return (
    <div className="App">
      <SimpleGrid columns={16} p={4}>
        <FilterBar />
        <ProductsListing />
      </SimpleGrid>
    </div>
  );
}
