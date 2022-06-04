import { FILTER_ACTIONS } from "actions";
import { initialFilterState } from "contexts";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.SET_SORT_BY:
      return { ...state, sortBy: payload.sortBy };

    case FILTER_ACTIONS.UPDATE_SELECTED_SIZES:
      return { ...state, selectedSizes: payload.sizes };

    case FILTER_ACTIONS.UPDATE_SELECTED_BRANDS:
      return { ...state, selectedBrands: payload.brands };

    case FILTER_ACTIONS.UPDATE_SELECTED_GENDERS:
      return { ...state, selectedGenders: payload.genders };

    case FILTER_ACTIONS.RESET_FILTER:
      return { ...initialFilterState };

    default:
      return state;
  }
};
