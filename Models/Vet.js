import mongoose from "mongoose";

const VetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Vet_id: {
        type: String,
        required: true,
    }

});

export default mongoose.models.vet || mongoose.model("vet", VetSchema);