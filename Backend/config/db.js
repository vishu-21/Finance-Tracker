const mongoose = require('mongoose');

const connectDB = async() =>{
try {
    const conn =  await mongoose.connect("mongodb+srv://Vishal:tE48Z9nxe4SGoBeB@vishal.cinsd5w.mongodb.net/data?retryWrites=true&w=majority");

        console.log(`MonngoDB connected: ${conn.connection.host}`.green.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;