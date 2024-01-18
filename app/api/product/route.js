import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import axios from 'axios';


export async function POST(req, res) {
    const body = await req.json();
    console.log('api/product', body)
    connectToDB();
    const newProduct = new Products({ ...body });
    try {
        const savedProduct = await newProduct.save();
        console.log('hhh', savedProduct)
        return NextResponse.json(savedProduct)

    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};

// export async function GET(req, res) {
//     connectToDB();
//     try {
//         console.log('runinng get')
//         const products = await Products.find();
//         return NextResponse.json(products)
//     } catch (err) {
//         console.log(err.message)
//         return NextResponse.json('error api/products', err.message)
//     }
// };


export async function GET(req, { params }) {
    connectToDB();
    console.log('is runing')
    const page = Number(req.url.split('?page=')[1])
    // const searchParams = new URLSearchParams(req.url);
    const pageSize = 12
    const skip = (page - 1) * pageSize;

    try {
        const response = await Products.find().skip(skip).limit(pageSize)
        console.log(response)
        // const responseData = response.data; // Extract necessary data from the response

        return NextResponse.json(response); // Return only the necessary data
    } catch (error) {
        console.error('Error occurred:', error);
        return NextResponse.error();
    }
}

// export const random = async (req, res, next) => {
//     console.log('a', req.query)
//     const { page = 1, pageSize = 12 } = req.query;
//     console.log('s', page, pageSize)
//     const skip = (page - 1) * pageSize;
//     console.log('s', skip)
//     try {
//       const videos = await Video.find().skip(skip).limit(pageSize);
//       res.status(200).json(videos);
//     } catch (err) {
//       next(err);
//     }
//   };