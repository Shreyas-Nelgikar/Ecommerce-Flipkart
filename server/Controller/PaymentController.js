import paytmChecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from '../index.js';

export const setUpPayment = async (request, response) => {
    try {
        let checkSum = await paytmChecksum.generateSignature(paytmParams, paytmMerchantKey);
        let params = {
            ...paytmParams, 'CHECKSUMHASH': checkSum
        }
        response.status(200).json(params);
    } catch (error) {
        response.status(401).json({ error: error.message });
    }
} 