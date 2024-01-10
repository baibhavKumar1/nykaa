import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLEPRODUCT_ERROR, GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS } from "./actionType";
import axios from "axios";

const url = 'https://tame-rose-cod-gown.cyclic.app/api/products'

export const getProduct = (token, params) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    await axios.get(`${url}`, {
        params: params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res })
            console.log(res)
        })
        .catch((err) => {
            dispatch({ type: GET_PRODUCT_ERROR })
            console.log(err)
        })
}
export const getSingleProduct = (token, id) => async (dispatch) => {
    dispatch({ type: GET_SINGLEPRODUCT_LOADING })
    await axios.get(`${url}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            dispatch({ type: GET_SINGLEPRODUCT_SUCCESS, payload: res })
            console.log(res)
        })
        .catch((err) => {
            dispatch({ type: GET_SINGLEPRODUCT_ERROR })
            console.log(err)
        })
}
export const addProduct = (token, data) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_LOADING })
    await axios.post(`${url}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res })
            dispatch(getProduct(token, {}));
            console.log(res)
        })
        .catch((err) => {
            dispatch({ type: ADD_PRODUCT_ERROR })
            console.log(err)
        })
}


export const deleteProduct = (token, id) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_LOADING });
    await axios.delete(`${url}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    ).then((res) => {
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res });
        dispatch(getProduct(token, {}));
        console.log(res)
    })
        .catch((err) => {
            dispatch({ type: DELETE_PRODUCT_ERROR })
            console.log(err)
        })
}
export const updateProduct = (token, data, id) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_LOADING });
    await axios.patch(
        `${url}/${id}`, data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    ).then((res) => {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res });
        dispatch(getProduct(token, {}));
        console.log(res)
    })
        .catch((err) => {
            dispatch({ type: UPDATE_PRODUCT_ERROR })
            console.log(err)
        })
}

