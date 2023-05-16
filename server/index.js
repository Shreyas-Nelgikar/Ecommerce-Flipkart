import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import { DefaultData } from './default.js';
import Router from './routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

const App = express();
const Port = 8000;

dotenv.config();

App.use(cors());
App.use(bodyParser.json({ extended: true }));
App.use(bodyParser.urlencoded({ extended: true }));
App.use('/', Router);

const UserName = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;
Connection(UserName, Password);
App.listen(Port, () => console.log(`Server is running Succesfully on ${Port}`));
DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:    8000/callback';
paytmParams['EMAIL'] = 'abc@gmail.com';
paytmParams['MOBILE'] = '1234567890';