const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array
    }


});

module.exports = mongoose.model('Workout', Workout);