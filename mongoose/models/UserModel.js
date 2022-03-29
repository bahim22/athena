const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength:[3, "Minimum name length is 3"],
        maxlength:[30, "Maximum name length is 30"],
        unique: true,
        _id: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        _id: true,
    },
    password: {
        type: String,

    },
    
})