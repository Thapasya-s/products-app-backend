const express=require("express")
const router=express.Router()
const billModel=require("../models/productModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let product=new productModel(data)
    let result=await product.save()
    res.json({
        status:"success"
    })

})

module.exports=router