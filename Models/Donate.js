import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;
const DonateSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User",
    },
    email: {
        type: String,
        required: true
    },
    total: {
        type: Number,
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

export default mongoose.models.Donate||mongoose.model("Donate", DonateSchema);