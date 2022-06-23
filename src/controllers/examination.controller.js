const express= require("express")
const router=express.Router()
const Examination= require("../models/examination.model")
router.get("",async(req,res)=>{
     
    try { 
        const examinations= await Examination.find().lean().exec();
        return res.status(200).send(examinations)
        
    } catch (error) {
        
        return res.status(500).send(error.message)
    }
})
router.post("",async(req,res)=>{
     
    try { 
        const examination= await Examination.create(req.body);
        return res.status(201).send(examination)
        
    } catch (error) {
        
        return res.status(500).send(error.message)
    }
})



module.exports=router