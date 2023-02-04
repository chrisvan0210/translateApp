const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const vnSchema = new Schema({
    content : {
        keyword : {
            type : String,
            unique : true
        },
        value : String
    }
});

const Vietnamese = mongoose.models.vns || mongoose.model('vns',vnSchema);

module.exports = Vietnamese;