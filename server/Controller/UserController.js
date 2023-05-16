import User from "../module/userSchema.js";


export const userSignUp = async (request, response) => {
    try {
        const Exists = await User.findOne({ username: request.body.username });
        if (Exists) {
            return response.status(401).json({ message: "Username already exists" });
        }
        const user = request.body;
        const newUser = User(user);
        await newUser.save(); 
        response.status(200).json({ message: user });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const userLogin = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;
        const valid = await User.findOne({ username, password });
        if (valid)
            return response.status(200).json({ data: valid });
        else
            response.status(401).json({ message: "Username or Password Incorrect" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}