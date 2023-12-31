import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"


export async function POST(req, res) {
    const body = await req.json();
    console.log('api/product', body)
    connectToDB();
    const newProduct = new Products({ ...body });
    try {
        const savedProduct = await newProduct.save();
        console.log('hhh', savedProduct)
        return NextResponse.json(savedProduct)

    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};

export async function GET(req, res) {
    connectToDB();
    try {
        console.log('runinng get')
        const products = await Products.find();
        return NextResponse.json(products)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};