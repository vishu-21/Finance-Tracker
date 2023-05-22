const mongoose = require('mongoose');

const connectDB = async() =>{
try {
    const conn =  await mongoose.connect(process.env.MONGO_URI);

        console.log(`MonngoDB connected: ${conn.connection.host}`.green.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;