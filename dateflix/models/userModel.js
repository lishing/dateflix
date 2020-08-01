const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true, minLength: 5 },
});

module.exports = User = mongoose.model("user", userSchema);