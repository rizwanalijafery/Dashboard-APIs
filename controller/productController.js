const Product = require("../models/productmodel");
const getProducts = async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    }catch (error){
        res.status(500).json({message:error.message})
    }
}
//get single product
const getProduct= async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch (error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}
//create a product
const createProduct = async (req  ,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
}
const updateProduct = async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body,{new: true});
        if(!product){
            //     //we cannot find a product with that id
            return res.status(404).json({message: `cannot find your id ${id}`})
        }
        // const updatedProduct=await Product.findById(id);
        return res.status(200).json(product);
    }catch (error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
}
const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const  product = await Product.findByIdAndDelete(id)
        if(!product)
        {
            return res.status(404).json({message: `cant find your product id ${id}`})
        }
        return res.send(200).json(product);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    getProducts,getProduct,createProduct,updateProduct,deleteProduct,
}