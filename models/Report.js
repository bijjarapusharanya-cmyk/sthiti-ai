const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    score: Number,
    description: String,
    timestamp: { type: Date, default: Date.now },
    location: {
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Report', reportSchema);