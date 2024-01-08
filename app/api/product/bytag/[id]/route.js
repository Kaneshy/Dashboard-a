import Products from "@/app/lib/models/Products";
import { connectToDB } from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    connectToDB();

    const data = params.id
    const keyword = data.split('&&')
    
    try {
        console.log('runinng get')
        const products = await Products.find({ 
            selectedClothing: { $in: keyword[1] },
            sex:keyword[0]
         }).limit(20)
        return NextResponse.json(products)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};

// export const getByTag = async (req, res, next) => {
//     console.log('runing server tag', req.query.tags.split(",") )
    
//     const tags = req.query.tags.split(",");
  
//     try {
//       const products = await Products.find({ selectedClothing: { $in: keyword } }).limit(20);
//       res.status(200).json(videos);
//     } catch (err) {
//       console.log('err', err)
//       next(err);
//     }
//   };