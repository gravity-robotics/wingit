const mongoose = require("mongoose")

const menuSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  price: { type: Number},
  description: { type: String },
  category: { type: String },
  choices: { type: String },
  taste: { type: String },
  cooking_time: { type: Number },
  availability: { type: String },
});

module.exports = mongoose.model("Item", menuSchema)
