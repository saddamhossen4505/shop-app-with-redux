import {
  BRAND_CREATE_FAIELD,
  BRAND_CREATE_SUCCESS,
  BRAND_DELETE_FAIELD,
  BRAND_DELETE_SUCCESS,
  BRAND_REQUEST,
  BRAND_REQUEST_FAIELD,
  BRAND_REQUEST_SUCCESS,
  BRAND_STATUS_UPDATE_SUCCESS,
  BRAND_UPDATE_SUCCESS,
  CATEGORY_CREATE_FAIELD,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_REQUEST,
  CATEGORY_REQUEST_FAIELD,
  CATEGORY_REQUEST_SUCCESS,
  CATEGORY_STATUS_UPDATE_SUCCESS,
  CATEGORY_UPDATE_SUCCESS,
  CREATE_TAG_REQUEST,
  CREATE_TAG_REQUEST_FAIELD,
  CREATE_TAG_REQUEST_SUCCESS,
  TAG_DELETE_FAIELD,
  TAG_DELETE_SUCCESS,
  TAG_REQUEST,
  TAG_REQUEST_FAIELD,
  TAG_REQUEST_SUCCESS,
  TAG_STATUS_UPDATE_SUCCESS,
  TAG_UPDATE_SUCCESS,
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

    case BRAND_STATUS_UPDATE_SUCCESS:
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

    case TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: payload,
      };

    case TAG_REQUEST_FAIELD:
      return {
        ...state,
        loading: false,
        tags: [null],
        error: payload,
      };

    case CREATE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: [...state.tags, payload],
      };

    case CREATE_TAG_REQUEST_FAIELD:
      return {
        ...state,
        loading: false,
        tags: [...state.tags],
        error: payload,
      };

    case TAG_STATUS_UPDATE_SUCCESS:
      state.tags[state.tags.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
      };

    case TAG_UPDATE_SUCCESS:
      state.tags[state.tags.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
      };

    case TAG_DELETE_SUCCESS:
      return {
        ...state,
        tags: state.tags.filter((data) => data._id !== payload),
      };

    case TAG_DELETE_FAIELD:
      return {
        ...state,
        tags: [...state.tags],
      };

    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };

    case CATEGORY_REQUEST_FAIELD:
      return {
        ...state,
        loading: false,
        categories: [null],
        error: payload,
      };

    case CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case CATEGORY_CREATE_FAIELD:
      return {
        ...state,
        categories: [...state.categories],
      };

    case CATEGORY_STATUS_UPDATE_SUCCESS:
      state.categories[
        state.categories.findIndex((data) => data._id === payload._id)
      ] = payload;
      return {
        ...state,
      };

    case CATEGORY_UPDATE_SUCCESS:
      state.categories[
        state.categories.findIndex((data) => data._id === payload._id)
      ] = payload;
      return {
        ...state,
      };

    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter((data) => data._id !== payload),
      };

    default:
      return state;
  }
};

// Export.
export default shopReducer;
