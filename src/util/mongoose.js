const mutipleMongooseToObj = (mongooses) => {
    return mongooses.map(mongoose => mongoose.toObject());
};

const mongooseToObj = (mongooses) => {
    return mongooses ? mongoose.toObject() : mongoose;
};

module.exports = { mutipleMongooseToObj, mongooseToObj };