import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;
const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User",
    },
    products: [{
        quantity: { type: Number, default: 1 },
        product: { type: ObjectId, ref: "product" },
        price: { type: Number, default: 0 }
    }]

});

export default mongoose.models.cart||mongoose.model("cart", cartSchema);