import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;
const OrderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User",
    },
    products: [{
        quantity: { type: Number, default: 1 },
        product: { type: ObjectId, ref: "product" },
        price: { type: Number, default: 0 },
        productname: {type: String, default: ""}
    }],
    email: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    razorpayOrderId: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.models.Order||mongoose.model("Order", OrderSchema);