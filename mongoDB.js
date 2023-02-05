const mongoose = require("mongoose");
const Langs = require("./model/all");
mongoose.set("strictQuery", false);

// const uri = "mongodb://127.0.0.1:27017/fb88_languages";
const uri = "mongodb+srv://fb88_translate:Xawy0XvSii8zc4Sn@cluster0.hmcr9cl.mongodb.net/?retryWrites=true&w=majority";
try {
  mongoose.connect(uri).then(() => console.log("Connected!"));
} catch (err) {
  console.log(err);
}

module.exports = { Langs };
