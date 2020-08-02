const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    //username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
});

module.exports = User = mongoose.model("user", userSchema);