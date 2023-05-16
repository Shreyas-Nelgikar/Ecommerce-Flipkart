import { createStore, applyMiddleware, combineReducers } from 'redux';
import thonk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductReducer } from './Reducers/ProductReducer';
import { getCartReducer } from './Reducers/CartReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    getCart: getCartReducer
});

const middleware = [thonk];

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;