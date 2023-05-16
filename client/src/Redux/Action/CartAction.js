import axios from "axios";
import * as Type from '../Constnats/CartConstants';

const URL = 'http://localhost:8000';

export const AddToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: Type.ADD_TO_CART_SUCCESS , payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: Type.ADD_TO_CART_FAILURE, payload: error.message })
    }
}

export const RemoveFromCart = (id) => (dispatch) => {
    dispatch({ type: Type.REMOVE_FROM_CART, payload: id });
}