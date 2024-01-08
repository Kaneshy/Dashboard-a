import Products from "@/app/lib/models/Products";
import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    connectToDB();
    try {
        console.log('runinng get')
        const product = await Products.findById(params.id);
        return NextResponse.json(product)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/product', err.message)
    }
};

export async function DELETE(request, { params }) {
    connectToDB();
    try {
        console.log('runinng get')
        await Products.findByIdAndDelete(params.id);
        return NextResponse.json('deleted succefully')
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/product', err.message)
    }
};


export async function PUT(request, { params }) {
    connectToDB();
    try {

        const da = await request.json()
        const data =  {
            title:da.title,
            price:da.price,
            color:da.color,
            stock:da.stock,
            imgUrl: da.imgUrl,
            brand:da.brand,
            desc:da.desc,
            categorie:da.categorie,
            selectedClothing:da.selectedClothing,
            selectedSize:da.selectedSize,
            sex:da.sex
        }
        console.log('da', da)
        const productUpdated = await Products.findByIdAndUpdate(params.id,
            {$set: data},
            { new: true }
        )

        console.log(productUpdated)
        return NextResponse.json(productUpdated)

    } catch (error) {
        console.log('Error', error.message)
        return NextResponse.json('error')
    }

}