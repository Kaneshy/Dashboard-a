import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import { revalidatePath } from "next/cache";


export async function POST(req, res) {

    const body = await req.json();
    console.log(body,'dfdfo')
    connectToDB();
   
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.password, salt);

        const newUser = new Users({ ...body, password: hash })

        const savedUser = await newUser.save();
        revalidatePath("/dashboard/users")

    } catch (err) {
        console.log(err.message)
    }
    revalidatePath("/dashboard/users")
    return NextResponse.json('succefull')
};

export async function GET(req, res) {
    connectToDB();
    try {
        const users = await Users.find();
        return NextResponse.json(users)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};