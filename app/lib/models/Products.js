import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    stock: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    categorie: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Products = mongoose.models.Products || mongoose.model("Products", ProductsSchema);

export default Products;