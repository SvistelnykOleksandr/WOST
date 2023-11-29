const {db} = require('./../configuration');
const mongoose = require('mongoose')

module.exports.connectDB = () =>{
    mongoose.connect(db, {useNewUrlParser: true});
    return mongoose.connection;
}