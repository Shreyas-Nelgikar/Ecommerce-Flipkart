import axios from 'axios';
import * as Type from '../Constnats/ProductConstants';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: Type.GET_PROUCT_SUCCESS, payload: data});
    } catch (error) {
        console.log('Error while calling getProducts api', error.message);
        dispatch({ type: Type.GET_PROUCT_FAILURE, payload: error.message});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: Type.GET_PRODUCT_DETAILS_LOADING });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: Type.GET_PRODUCT_DETAILS_SUCCESS, payload: data }); 
    } catch (error) {
        console.log('Error while calling getProductsDetails api', error.message);
        dispatch({ type: Type.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}