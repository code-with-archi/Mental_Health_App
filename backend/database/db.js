import mongoose from "mongoose";

export const Connection = async () => {
    const URL = process.env.MONGODB_URL; // ✅ fixed variable name

    try {
        await mongoose.connect(URL);
        console.log('✅ Database connected successfully!!!');
    } catch (error) {
        console.log('❌ Error while connecting with the database:', error.message);
    }
};

export default Connection;
