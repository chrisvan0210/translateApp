const mongoose = require("mongoose");
const Vietnamese = require("./model/vn");
const Chinese = require("./model/cn");
const Thai = require("./model/th");
const Langs = require("./model/all");
mongoose.set("strictQuery", false);

const uri = "mongodb://127.0.0.1:27017/fb88_languages";
try {
  mongoose.connect(uri).then(() => console.log("Connected!"));
} catch (err) {
  console.log(err);
}

module.exports = { Vietnamese, Chinese, Thai, Langs };
