import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    connectToDB();
    try {
        console.log('runinng get')
        const da = await Users.findById(params.id);
        const data =  {
            admin: da.admin,
            action: da.action,
            imgUrl: da.imgUrl,
            username: da.username,
            email: da.email,
            phone: da.phone,
            address: da.address,
            desc: da.desc,
        }
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
        await Users.findByIdAndDelete(params.id);
        return NextResponse.json('deleted succefully')
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/user', err.message)
    }
};


export async function PUT(request, { params }) {
    connectToDB();
    try {

        const da = await request.json()
        const data =  {
            admin: da.admin,
            action: da.action,
            imgUrl: da.imgUrl,
            username: da.username,
            email: da.email,
            phone: da.phone,
            address: da.address,
            desc: da.desc,
            password: da.password
        }
        console.log('da', da)
        const userUpdated = await Users.findByIdAndUpdate(params.id,
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