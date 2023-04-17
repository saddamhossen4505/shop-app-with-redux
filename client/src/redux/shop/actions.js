import axios from "axios";
import {
  BRAND_CREATE_FAIELD,
  BRAND_CREATE_SUCCESS,
  BRAND_DELETE_FAIELD,
  BRAND_DELETE_SUCCESS,
  BRAND_REQUEST,
  BRAND_REQUEST_FAIELD,
  BRAND_REQUEST_SUCCESS,
  BRAND_STATUS_UPDATE,
  BRAND_UPDATE_FAIELD,
  BRAND_UPDATE_SUCCESS,
} from "./actionTypes";

// GetAll Brands.
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: BRAND_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/brand")
      .then((res) => {
        dispatch({ type: BRAND_REQUEST_SUCCESS, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({
          type: BRAND_REQUEST_FAIELD,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: BRAND_REQUEST_FAIELD,
      payload: error.response.data.message,
    });
  }
};

// Create Brands.
export const createBrand =
  ({ data, setModal, setInput, setPhoto }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/product/brand", data)
        .then((res) => {
          dispatch({ type: BRAND_CREATE_SUCCESS, payload: res.data.brand });
          setInput("");
          setPhoto(null);
          setModal(false);
        })
        .catch((error) => {
          dispatch({
            type: BRAND_CREATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: BRAND_CREATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Delete Brands.
export const deleteBrand = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: BRAND_DELETE_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: BRAND_DELETE_FAIELD,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: BRAND_CREATE_FAIELD,
      payload: error.response.data.message,
    });
  }
};

// Update brand status.
export const updateBrandStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({ type: BRAND_STATUS_UPDATE, payload: res.data.brand });
        })
        .catch((error) => {
          dispatch({
            type: BRAND_STATUS_UPDATE,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: BRAND_STATUS_UPDATE,
        payload: error.response.data.message,
      });
    }
  };

// Update brandData.
export const updateBrand =
  ({ id, data }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand/${id}`, data)
        .then((res) => {
          dispatch({ type: BRAND_UPDATE_SUCCESS, payload: res.data.brand });
        })
        .catch((error) => {
          dispatch({
            type: BRAND_UPDATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: BRAND_UPDATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };
