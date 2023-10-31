const mongoose = require("mongoose");

const recipeschmea = new mongoose.Schema({
  recipename: {
    type: String,
    required: true,
  },
  ingreidients: {
    type: Array,
    required: true,
  },
  preparation: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Recipes", recipeschmea);
