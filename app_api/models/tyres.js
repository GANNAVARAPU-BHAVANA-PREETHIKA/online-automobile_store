const mongoose = require('mongoose');

// Define a Mongoose schema for tire models
const tyreSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: String,
  size: String,
  speedRating: String,
  inStock: {
    type: Number,
    default: 0,
  },
  price: Number,
});

// Create a Mongoose model based on the schema
const Tyre = mongoose.model('Tyres', tyreSchema);






