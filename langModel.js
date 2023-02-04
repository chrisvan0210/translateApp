const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.Promise = global.Promise;


const contactSchema = new Schema({
    phonenumber: String,
    facebook: String,
    email: {
        type: String,
        unique: true,
    }
});


const EN = mongoose.models.lang || mongoose.model('en',userSchema);

module.exports = EN;