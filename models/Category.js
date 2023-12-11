const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

const CategoryModel = new mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
