import Providers from "@/app/lib/models/Providers";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"


export async function GET(request, { params }) {
    connectToDB();
    try {
        console.log('runinng get')
        const data = await Providers.findById(params.id);
        return NextResponse.json(data)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/user', err.message)
    }
};

export async function DELETE(request, { params }) {
    connectToDB();
    try {
        console.log('runinng get')
        await Providers.findByIdAndDelete(params.id);
        return NextResponse.json('deleted succefully')
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/user', err.message)
    }
};


export async function PUT(request, { params }) {
    connectToDB();
    try {

        const data = await request.json()

        const userUpdated = await Providers.findByIdAndUpdate(params.id,
            {$set: data},
            { new: true }
        )

        console.log(userUpdated)
        return NextResponse.json(userUpdated)

    } catch (error) {
        console.log('Error', error.message)
        return NextResponse.json('error')
    }

}