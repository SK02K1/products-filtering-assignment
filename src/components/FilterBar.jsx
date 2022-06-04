import {
  GridItem,
  HStack,
  Button,
  VStack,
  Heading,
  Checkbox,
  Radio
} from "@chakra-ui/react";

import sizes from "backend/db/sizes";
import brands from "backend/db/brands";
import genders from "backend/db/genders";

import { useFilter } from "contexts";
import { FILTER_ACTIONS } from "actions";
import { selectionHandler } from "utils";
import { useEffect } from "react";

export const FilterBar = () => {
  const { filterState, dispatchFilter } = useFilter();
  const {
    sortBy,
    selectedSizes,
    selectedBrands,
    selectedGenders
  } = filterState;

  const sortByHandler = (e) => {
    dispatchFilter({
      type: FILTER_ACTIONS.SET_SORT_BY,
      payload: { sortBy: e.target.value }
    });
  };

  const sizeSelectionHandler = ({ e, size }) => {
    const isSelected = e.target.checked;
    dispatchFilter({
      type: FILTER_ACTIONS.UPDATE_SELECTED_SIZES,
      payload: {
        sizes: selectionHandler({
          isSelected,
          selectedOption: size,
          options: selectedSizes
        })
      }
    });
  };

  const brandSelectionHandler = ({ e, brand }) => {
    const isSelected = e.target.checked;
    dispatchFilter({
      type: FILTER_ACTIONS.UPDATE_SELECTED_BRANDS,
      payload: {
        brands: selectionHandler({
          isSelected,
          selectedOption: brand,
          options: selectedBrands
        })
      }
    });
  };

  const genderSelectionHandler = ({ e, gender }) => {
    const isSelected = e.target.checked;
    dispatchFilter({
      type: FILTER_ACTIONS.UPDATE_SELECTED_GENDERS,
      payload: {
        genders: selectionHandler({
          isSelected,
          selectedOption: gender,
          options: selectedGenders
        })
      }
    });
  };

  const clearBtnHandler = () => {
    dispatchFilter({ type: FILTER_ACTIONS.RESET_FILTER });
  };

  return (
    <GridItem colSpan={3} w="full">
      <VStack spacing={8}>
        <HStack justifyContent="space-between" w="full">
          <Heading mb="2" fontSize="2xl">
            Filters
          </Heading>
          <Button onClick={clearBtnHandler} size="sm" colorScheme="blue">
            Clear
          </Button>
        </HStack>
        <VStack alignItems="flex-start" spacing={1} w="full">
          <Heading mb="2" fontSize="lg">
            SORT BY
          </Heading>

          <Radio
            onChange={sortByHandler}
            value="LOW_TO_HIGH"
            name="sortby"
            isChecked={sortBy === "LOW_TO_HIGH"}
          >
            Price - low to high
          </Radio>
          <Radio
            onChange={sortByHandler}
            value="HIGH_TO_LOW"
            name="sortby"
            isChecked={sortBy === "HIGH_TO_LOW"}
          >
            Price - high to low
          </Radio>
        </VStack>
        <VStack alignItems="flex-start" spacing={1} w="full">
          <Heading mb="2" fontSize="lg">
            SIZE
          </Heading>
          {sizes.map(({ _id: sizeID, size }) => (
            <Checkbox
              onChange={(e) => sizeSelectionHandler({ e, size })}
              key={sizeID}
              isChecked={selectedSizes.includes(size)}
            >
              {size}
            </Checkbox>
          ))}
        </VStack>
        <VStack alignItems="flex-start" spacing={1} w="full">
          <Heading mb="2" fontSize="lg">
            BRAND
          </Heading>
          {brands.map(({ _id: brandID, brand }) => (
            <Checkbox
              onChange={(e) => brandSelectionHandler({ e, brand })}
              key={brandID}
              isChecked={selectedBrands.includes(brand)}
            >
              {brand}
            </Checkbox>
          ))}
        </VStack>
        <VStack alignItems="flex-start" spacing={1} w="full">
          <Heading mb="2" fontSize="lg">
            GENDER
          </Heading>
          {genders.map(({ _id: genderID, gender }) => (
            <Checkbox
              onChange={(e) => genderSelectionHandler({ e, gender })}
              key={genderID}
              isChecked={selectedGenders.includes(gender)}
            >
              {gender}
            </Checkbox>
          ))}
        </VStack>
      </VStack>
    </GridItem>
  );
};
