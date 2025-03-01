const Product = require("../models/productModel");
const getProducts = async (req,res) => {
    try{

const products = await Product.find();

res.status(200).json({
message:"Product fetched",
products:products,
});
}catch(error){
res.status(500).json({
message:error.message||"Internal Server Error",
})}}
const getProductById = async (req,res)=>{
try {

const { productId }=req.params;
const product = await Product.findById(productId);

if(!product) {
return res.status(404).json({
message: "Product not found",
});
}
res.status(200).json({
message:"product Fetched",
product,
});

}catch(error){
res.json({
message:error.message|| "internal server error"
})
}
}
const createProduct=async(req,res)=>{
try{
const productData =req.body;
const newProduct = await Product.create(productData);
res.status(201).json({
message:"product fetched",
product:newProduct
});
}
catch(error){
    res.status(500).json({
            message:error.message || "internal server Error",
        });
    }}



const updateProduct = async (req, res) => {
    try {const { productId }=req.params;
    const productData =req.body;
    const product = await Product.findById(productId);
    
    if(!product) {
    return res.status(404).json({
    message: "Product not found",
    });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {
        ...productData,
    },
    {
        new: true,
    }
);
res.status(200).json({
message: "Product updated",
product: updatedProduct,
});
        
    } catch (error) {
        res.status(500).json({
            message:error.message || "internal server Error",
        });
    }}
 const deleteProduct = async(req,res)=>{
    try{
        const{ productId } =req.params;

        const product =await Product.findById(productId);

        if(!product) {
            return res.status(404).json({
            message: "Product not found",
            });
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({
        message:"product deleted",
    });
}catch(error){
        res.status(500).json({
            message:error.message || "Internal Server Error",
        });
    }
 };
    


    module.exports = { getProducts,createProduct,getProductById,updateProduct,deleteProduct };
 