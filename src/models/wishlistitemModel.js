const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
});

const whislistitem = mongoose.model("wishlistitem", wishlistItemSchema);

module.exports = wishlistItem;