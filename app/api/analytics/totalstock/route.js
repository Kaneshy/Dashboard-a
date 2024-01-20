import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache";
import Products from "@/app/lib/models/Products";



export async function GET(req, res) {
    connectToDB();
    try {
        const price = await Products.find().select('price');

        const totalPrice = price.reduce((sum, item) => sum + parseFloat(item.price), 0);
        const data = {
            totalValue: totalPrice,
            lengthValue: price.length
        }
        return NextResponse.json(data)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};