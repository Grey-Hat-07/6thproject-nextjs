import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema.Types;
const chatSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User",
    },
    vetId:{
        type: ObjectId,
        ref: "Vet",
    },
    username: {
        type: String,
        required: true,
    },
    vetname:{
        type: String,
        required:true
    },
    status: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    messages: [{
        message: { type: String, required: true },
        sender: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
    }]
});
export default mongoose.models.chat||mongoose.model("chat", chatSchema);