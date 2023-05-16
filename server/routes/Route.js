import express from 'express';
import { userSignUp } from "../Controller/UserController.js";
import { userLogin } from '../Controller/UserController.js';
import { getProductID, getProducts } from '../Controller/ProductContrlloer.js';
import { setUpPayment } from '../Controller/PaymentController.js';

const router = express.Router();
router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductID);

router.post('/payment', setUpPayment);

export default router;