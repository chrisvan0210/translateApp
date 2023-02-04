const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const langSchema = new Schema({
    content : {
        en : {
            type : String,
            unique : true,
        },
        vn : {
            type : String,
        },
        cn : {
            type : String,
        },
        th : {
            type : String,
        },
    }
});

const Langs = mongoose.models.langs || mongoose.model('langs',langSchema);

module.exports = Langs;