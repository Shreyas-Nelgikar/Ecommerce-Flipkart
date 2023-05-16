import * as Type from '../Constnats/CartConstants';

export const getCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case Type.ADD_TO_CART_SUCCESS:
            const item = action.payload;
            const exists = state.cartItems.find(product => product.id === item.id);
            if (exists)
                return { ...state, cartItems: state.cartItems }
            else
                return { ...state, cartItems: [...state.cartItems, item] }
        case Type.ADD_TO_CART_FAILURE:
            return { error: action.payload }
        case Type.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }
        default:
            return state;
    }
}