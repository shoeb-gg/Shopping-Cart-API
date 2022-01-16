const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  addDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Products", productSchema);
