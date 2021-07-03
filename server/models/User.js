const { model, Schema } = require("mongoose");

module.exports = model(
    "user", 
    Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now(),
        },
    })
);
