const mongoose = require('mongoose');

// connect db
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/phuong_education_dev');
        console.log('connect successfully!!!');
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { connect };
