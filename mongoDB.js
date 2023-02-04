const mongoose = require("mongoose");
const Langs = require("./model/all");
mongoose.set("strictQuery", false);

const uri = "mongodb://127.0.0.1:27017/fb88_languages";
try {
  mongoose.connect(uri).then(() => console.log("Connected!"));
} catch (err) {
  console.log(err);
}

module.exports = { Langs };
