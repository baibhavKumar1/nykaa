import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLEPRODUCT_ERROR, GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS } from "./actionType";
  
  const initState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct:{}
  };
  
  export const reducer = (state = initState, {type,payload}) => {
    switch (type) {
      case GET_PRODUCT_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: payload.data.product,
        };
      case GET_SINGLEPRODUCT_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_SINGLEPRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case GET_SINGLEPRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          product: payload,
        };
      case ADD_PRODUCT_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case ADD_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: payload,
        };

      case UPDATE_PRODUCT_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case UPDATE_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: payload,
        };
      case DELETE_PRODUCT_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case DELETE_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: payload,
        };
      default:
        return state;
    }
  };
  