import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache";
import Providers from "@/app/lib/models/Providers";


export async function POST(req, res) {
    const body = await req.json();
    connectToDB();
   
    try {
        const newUser = new Providers({ ...body })

        const savedUser = await newUser.save();
        revalidatePath("/dashboard/providers")

    } catch (err) {
        console.log(err.message)
    }
    revalidatePath("/dashboard/providers")
    return NextResponse.json('succefull')
};

export async function GET(req, res) {
    connectToDB();
    try {
        console.log('runinng get')
        const users = await Providers.find();
        return NextResponse.json(users)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};