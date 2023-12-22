const mongoose = require("mongoose");

const recipeschmea = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  recipename: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Entree", "Mains", "Dessert", "Drink"],
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  preparation: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Recipes", recipeschmea);
