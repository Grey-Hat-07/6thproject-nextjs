import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    writer:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.blog || mongoose.model("blog", BlogSchema);