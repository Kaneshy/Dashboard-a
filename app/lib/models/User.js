import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    admin: {
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

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default Users;