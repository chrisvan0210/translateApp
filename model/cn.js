const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const cnSchema = new Schema({
    content : {
        keyword : {
            type : String,
            unique : true
        },
        value : String
    }
});

const Chinese = mongoose.models.cns || mongoose.model('cns',cnSchema);

module.exports = Chinese;