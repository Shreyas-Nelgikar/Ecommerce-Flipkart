import * as Type from '../Constnats/ProductConstants';

export const getProductReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case Type.GET_PROUCT_SUCCESS:
            return { products: action.payload};
        case Type.GET_PROUCT_FAILURE:
            return { error: action.payload};
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case Type.GET_PRODUCT_DETAILS_LOADING:
            return { Loading: true };
        case Type.GET_PRODUCT_DETAILS_SUCCESS:
            return { Loading: false, product: action.payload };
        case Type.GET_PRODUCT_DETAILS_FAIL:
            return { Loading: false, error: action.payload };
        case Type.GET_PRODUCT_DETAILS_RESET:
            return { Loading: false, product: {} };
        default :
            return state;
    }
}