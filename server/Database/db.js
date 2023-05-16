import mongoose from "mongoose";

export const Connection = async(UserName, Password) => {
    const URL = `mongodb+srv://${UserName}:${Password}@cluster0.7plvcs8.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connected to database Succesfully')
    } catch (error) {
        console.log('Error while connecting with database', error.message);
    }
}