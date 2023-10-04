// Define a Mongoose schema for engine oil products
const mongoose = require('mongoose');
const engineOilSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  inStock: {
    type: Number,
    default: 0,
  },
  volume: String,
  type: String, // e.g., Synthetic, Conventional
  price: Number,
});

// Create a Mongoose model based on the schema
const EngineOil = mongoose.model('EngineOil', engineOilSchema);

module.exports = {
    EngineOil
}