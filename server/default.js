import { products } from "./Constants/Data.js"
import Product from "./module/product-schema.js";

export const DefaultData = async() => {
    try {
        await Product.insertMany(products);
        console.log('Data Inserted succesfully');
    } catch (error) {
        console.log('Error while inserting Data', error.message);
    }
}