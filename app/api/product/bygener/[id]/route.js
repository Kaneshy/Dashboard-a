import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    connectToDB();
    try {
        console.log('runinng get')
        const products = await Products.find({
            sex:params.id
        });
        return NextResponse.json(products)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};