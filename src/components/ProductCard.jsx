import { Img, Text, VStack, HStack } from "@chakra-ui/react";

export const ProductCard = ({ productData }) => {
  const { productName, productImg, productPrice, brand, sizes } = productData;

  return (
    <VStack alignItems="flex-start" w="15rem" spacing={1}>
      <Img
        src={productImg}
        alt={productName}
        w="full"
        h="20rem"
        objectFit="cover"
        objectPosition="top"
      />
      <Text fontSize="sm" color="gray.500" fontWeight="600">
        {brand}
      </Text>

      <Text textAlign="left" fontWeight="600" noOfLines={1}>
        {productName}
      </Text>

      <Text fontWeight="700" color="blue.500">
        ₹{productPrice}
      </Text>

      <HStack>
        <Text fontSize="sm" fontWeight="600" color="gray.500">
          Size
        </Text>
        <Text>{sizes.join(", ")}</Text>
      </HStack>
    </VStack>
  );
};
