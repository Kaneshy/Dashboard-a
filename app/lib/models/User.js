import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
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
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    admin: {
        type: String,
    },
    action: {
        type: String,
    },
    desc: {
        type: String,
    }
}, { timestamps: true })

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default Users;