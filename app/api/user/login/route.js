import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import bycrptjs from 'bcryptjs'
import { revalidatePath } from "next/cache";

export async function POST(req, res) {
    const body = await req.json();
    console.log(body, 'gflgjfg')

    const email = body.email
    const password = body.password
    connectToDB();
    try {
        const user = await Users.findOne({ email });;
        if (!user) {
            return null;
        }
        const passwordsMatch = await bycrptjs.compare(
            password,
            user.password
        );
        if (!passwordsMatch) {
            return null;
          }
        return NextResponse.json(user)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};