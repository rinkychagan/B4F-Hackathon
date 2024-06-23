import { cache } from "react";
import connectDB from "../dbConnections";
import ProductModel from "@/models/productModel";
import { ProductType } from "@/utiles/types/product/productType";


const getLatestProduct = cache(async () => {
    await connectDB();
    const products = await ProductModel.find().sort({_id: -1}).limit(10).lean();
    return products as ProductType[]
});
    
const getIsFeatured =cache(async()=>{
    await connectDB();
    const products = await ProductModel.find({isFeatured: true}).limit(3).lean();
    return products as ProductType[]
})
const getBySlug = cache(async(slug: string)=>{
    await connectDB();
    const product = await ProductModel.findOne({slug})
    return product as ProductType
})
const productActions = {
    getLatestProduct,
    getIsFeatured,
    getBySlug
} 

export default productActions