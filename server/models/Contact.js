const { model, Schema } = require("mongoose");

module.exports = model(
    "contact",
    Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        type: {
            type: String,
            default: "personal",
        },
        date: {
            type: Date,
            default: Date.now(),
        },
    })
);
