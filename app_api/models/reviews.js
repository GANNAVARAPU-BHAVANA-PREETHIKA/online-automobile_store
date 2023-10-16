const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

const Reviews = mongoose.model('Reviews',reviewSchema);
module.exports = Reviews;