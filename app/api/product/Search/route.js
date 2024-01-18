import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET(req, { params }) {
    connectToDB();
    const keywords = req.url.split('?q=')[1]

    const uri = process.env.MONGODB_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('Dashboard_first');
        const collection = database.collection('products')

        // Create a text index (only needed once)
        await createTextIndex(collection);

        const searchQuery = keywords || 'RELOJ';
        const results = await searchAllFields(collection, searchQuery);

        return NextResponse.json(results)
    } catch (error) {
        console.log(error.message)
        return NextResponse.json(error.message)
    }


}

async function createTextIndex(collection) {
    const result = await collection.createIndex({ "$**": "text" });
}

async function searchAllFields(collection, searchQuery) {
    const result = await collection.find({ $text: { $search: searchQuery } }).toArray();
    return result;
}
