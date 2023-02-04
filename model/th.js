const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const thSchema = new Schema({
    content : {
        keyword : {
            type : String,
            unique : true
        },
        value : String
    }
});

const Thai = mongoose.models.ths || mongoose.model('ths',thSchema);

module.exports = Thai;