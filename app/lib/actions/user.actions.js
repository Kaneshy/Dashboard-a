import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

export async function POST(req, res) {
    const body = await req.json();
    console.log('api/tarjet', body)
    connectToDB();
   
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({ ...req.body, password: hash })

        const savedUser = await newUser.save();
        console.log('hhh', savedUser)
        return NextResponse.json(savedUser)

    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/user', err.message)
    }
};

export async function GET(req, res) {
    connectToDB();
    try {
        console.log('runinng get')
        const users = await Users.find();
        return NextResponse.json(users)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};