import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { FilterProvider } from "contexts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ChakraProvider>
  </StrictMode>
);
