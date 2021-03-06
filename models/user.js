const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    username: { type: String, required: true },
    name: { first_name: { type: String, required: true }, last_name: { type: String, required: true } },
    email: { type: String, required: true },
    date_registered: { type: Date, default: Date.now },

});

var User = mongoose.model('User', userSchema);

module.exports = User;

