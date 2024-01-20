import mongoose from "mongoose";

const ProvidersSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    manager: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Providers = mongoose.models.Providers || mongoose.model("Providers", ProvidersSchema);

export default Providers;