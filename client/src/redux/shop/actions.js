import axios from "axios";
import {
  BRAND_CREATE_FAIELD,
  BRAND_CREATE_SUCCESS,
  BRAND_DELETE_FAIELD,
  BRAND_DELETE_SUCCESS,
  BRAND_REQUEST,
  BRAND_REQUEST_FAIELD,
  BRAND_REQUEST_SUCCESS,
  BRAND_UPDATE_FAIELD,
  BRAND_UPDATE_SUCCESS,
  CATEGORY_CREATE_FAIELD,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_FAIELD,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_REQUEST,
  CATEGORY_REQUEST_FAIELD,
  CATEGORY_REQUEST_SUCCESS,
  CATEGORY_STATUS_UPDATE_FAIELD,
  CATEGORY_STATUS_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIELD,
  CATEGORY_UPDATE_SUCCESS,
  CREATE_TAG_REQUEST,
  CREATE_TAG_REQUEST_FAIELD,
  CREATE_TAG_REQUEST_SUCCESS,
  TAG_DELETE_FAIELD,
  TAG_DELETE_SUCCESS,
  TAG_REQUEST,
  TAG_REQUEST_FAIELD,
  TAG_REQUEST_SUCCESS,
  TAG_STATUS_UPDATE_FAIELD,
  TAG_STATUS_UPDATE_SUCCESS,
  TAG_UPDATE_FAIELD,
  TAG_UPDATE_SUCCESS,
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
            payload: error.response.data?.message,
          });
        });
    } catch (error) {
      dispatch({
        type: BRAND_UPDATE_FAIELD,
        payload: error.response.data?.message,
      });
    }
  };

// Get All Tags.
export const getAllTags = () => async (dispatch) => {
  try {
    dispatch({ type: TAG_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/tag")
      .then((res) => {
        dispatch({ type: TAG_REQUEST_SUCCESS, payload: res.data.tags });
      })
      .catch((error) => {
        dispatch({
          type: TAG_REQUEST_FAIELD,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: TAG_REQUEST_FAIELD,
      payload: error.response.data.message,
    });
  }
};

// Create Tag.
export const createTag =
  ({ name }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_TAG_REQUEST });
      await axios
        .post(`http://localhost:5050/api/v1/product/tag`, { name })

        .then((res) => {
          dispatch({
            type: CREATE_TAG_REQUEST_SUCCESS,
            payload: res.data.tags,
          });
        })
        .catch((error) => {
          dispatch({
            type: CREATE_TAG_REQUEST_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: CREATE_TAG_REQUEST_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Update tag status.
export const updateTagStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({ type: TAG_STATUS_UPDATE_SUCCESS, payload: res.data.tags });
        })
        .catch((error) => {
          dispatch({
            type: TAG_STATUS_UPDATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: TAG_STATUS_UPDATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Update tag.
export const updateTag =
  ({ id, name }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag/${id}`, {
          name,
        })
        .then((res) => {
          dispatch({ type: TAG_UPDATE_SUCCESS, payload: res.data.tags });
        })
        .catch((error) => {
          dispatch({
            type: TAG_UPDATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: TAG_UPDATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Delete tag.
export const deleteTag =
  ({ id }) =>
  async (dispatch) => {
    try {
      await axios
        .delete(`http://localhost:5050/api/v1/product/tag/${id}`)
        .then((res) => {
          dispatch({ type: TAG_DELETE_SUCCESS, payload: id });
        })
        .catch((error) => {
          dispatch({
            type: TAG_DELETE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: TAG_DELETE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Get all category.
export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });
    await axios
      .get(`http://localhost:5050/api/v1/product/category`)
      .then((res) => {
        dispatch({
          type: CATEGORY_REQUEST_SUCCESS,
          payload: res.data.categories,
        });
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_REQUEST_FAIELD,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: CATEGORY_REQUEST_FAIELD,
      payload: error.response.data.message,
    });
  }
};

// Create category.
export const createCategory =
  ({ data }) =>
  async (dispatch) => {
    try {
      await axios
        .post(`http://localhost:5050/api/v1/product/category`, data)
        .then((res) => {
          dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: res.data.category,
          });
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_CREATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: CATEGORY_CREATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Category status update.
export const updateStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/category-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({
            type: CATEGORY_STATUS_UPDATE_SUCCESS,
            payload: res.data.category,
          });
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_STATUS_UPDATE_FAIELD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: CATEGORY_CREATE_FAIELD,
        payload: error.response.data.message,
      });
    }
  };

// Category update.
export const categoryUpdate =
  ({ id, data }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/category/${id}`, data)
        .then((res) => {
          dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: res.data.category,
          });
        })
        .catch((error) => {
          dispatch({
            type: CATEGORY_UPDATE_FAIELD,
            payload: error.response.data?.message,
          });
        });
    } catch (error) {
      dispatch({
        type: BRAND_UPDATE_FAIELD,
        payload: error.response.data?.message,
      });
    }
  };

// Delete Category.
export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/category/${id}`)
      .then((res) => {
        dispatch({
          type: CATEGORY_DELETE_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_DELETE_FAIELD,
          payload: error.response.data?.message,
        });
      });
  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIELD,
      payload: error.response.data?.message,
    });
  }
};
