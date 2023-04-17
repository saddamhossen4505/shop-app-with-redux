import {
  BRAND_CREATE_FAIELD,
  BRAND_CREATE_SUCCESS,
  BRAND_DELETE_FAIELD,
  BRAND_DELETE_SUCCESS,
  BRAND_REQUEST,
  BRAND_REQUEST_FAIELD,
  BRAND_REQUEST_SUCCESS,
  BRAND_STATUS_UPDATE,
  BRAND_UPDATE_SUCCESS,
} from "./actionTypes";
import { initialState } from "./initialState";

// Create shopReducer.
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BRAND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };

    case BRAND_REQUEST_FAIELD:
      return {
        ...state,
        loading: false,
        brands: [null],
        error: payload,
      };

    case BRAND_CREATE_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };

    case BRAND_CREATE_FAIELD:
      return {
        ...state,
        brands: [...state.brands],
        error: payload,
      };

    case BRAND_DELETE_SUCCESS:
      return {
        ...state,
        brands: state.brands.filter((data) => data._id !== payload),
      };

    case BRAND_DELETE_FAIELD:
      return {
        ...state,
        brands: [...state.brands],
        error: payload,
      };

    case BRAND_STATUS_UPDATE:
      state.brands[state.brands.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
      };

      case BRAND_UPDATE_SUCCESS:
      state.brands[state.brands.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// Export.
export default shopReducer;
