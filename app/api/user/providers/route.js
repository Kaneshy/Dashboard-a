import Users from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache";


export async function POST(req, res) {

    const body = await req.json();
    console.log(body, 'dfdfo')
    const { name, email, image } = body
    connectToDB();

    const userExist = await Users.findOne({ email: email });
    if (userExist) {
        return NextResponse.json(userExist)
    } else {
        console.log('bd', body)

        const newUser = new Users({
            username: name,
            imgUrl: image,
            email,

        })
        const savedUser = await newUser.save();
        console.log(savedUser)
        revalidatePath("/dashboard/users")
        return NextResponse.json(savedUser)
    }
};
