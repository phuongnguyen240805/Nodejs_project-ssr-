const mutipleMongooseToObj = (mongooses) => {
    return mongooses.map(mongoose => mongoose.toObject());
};

const mongooseToObj = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
};

module.exports = { mutipleMongooseToObj, mongooseToObj };