const mongoose = require('mongoose');

// Define a Mongoose schema for spare parts
const sparePartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unique_id : {
    type : Number,
    required : true,
  },
  category: String,
  price: Number,
  inStock: {
    type: Number,
    default: 0,
  },
});

// Create a Mongoose model based on the schema
const SparePart = mongoose.model('SparePart', sparePartSchema);

// Export the SparePart model
module.exports = SparePart;