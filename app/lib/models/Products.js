import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        unique: false,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
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
    desc: {
        type: String,
        required: true,
    },
    selectedClothing: {
        type: [],
    },
    selectedSize: {
        type: [],
    },
    sex: {
        type: String,
    }

}, { timestamps: true })

const Products = mongoose.models.Products || mongoose.model("Products", ProductsSchema);

export default Products;