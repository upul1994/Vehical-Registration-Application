const express = require("express")
const vehicalSchema = require("../model/vehical")
const router =express.Router()




router.post("/add",(req,res)=>{
    const addVehical =new vehicalSchema(req.body)
    addVehical.save().then(addVehical=>{
         res.status(200).json(addVehical)
    }).catch(err=>{
        res.send("Unable to save database")
    })


})


router.get("/",(req,res)=>{
    vehicalSchema.find((err,vehicals)=>{
        if(err){
            console.log(err)
        }else{
            res.json(vehicals)
        }
    })
})


router.delete("/delete/:id",(req,res)=>{
const id =req.params.id
vehicalSchema.findByIdAndRemove(id,(err,result)=>{
    if(err){
        res.json(err)
    }else{
        res.json({msg:"vehical deleted successfully"})
    }
})
})


router.put("/update/:id",(req,res)=>{
vehicalSchema.findById(req.params.id,(err,vehical)=>{
    if(!vehical){
        res.send("vehical is not found")
    }else{
        vehical.vehicalNo=req.body.vehicalNo
        vehical.category =req.body.category
        vehical.price =req.body.price

        vehical.save().then(result=>{
            res.status(200).json({msg:"Updated Successfully"})
        }).catch(err=>{
            res.send("Unable to Update Vehical")
        })

    }
})
})



router.get("/edit/:id",(req,res)=>{
    const id = req.params.id;
vehicalSchema.findById(id,(err,vehical)=>{
    res.json(vehical)
})
})

module.exports =router
