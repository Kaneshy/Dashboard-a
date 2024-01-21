import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET(req, { params }) {
    console.log(4, params.id)
    connectToDB();
    const keywords = req.url.split('?q=')[1]
    console.log(keywords, 'dfdf')

    const uri = process.env.MONGODB_URL;
    const client = new MongoClient(uri);
    const collectionMain = params.id

    try {
        await client.connect();

        const database = client.db('Dashboard_first');
        const collection = database.collection(collectionMain)

        // Create a text index (only needed once)
        await createTextIndex(collection);

        const searchQuery = keywords || 'RELOJ';
        const results = await searchAllFields(collection, searchQuery);
        console.log(results, 'dddd')

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
