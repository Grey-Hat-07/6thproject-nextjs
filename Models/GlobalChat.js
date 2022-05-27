import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types;
const GlobalchatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.models.globalchat || mongoose.model("globalchat", GlobalchatSchema);