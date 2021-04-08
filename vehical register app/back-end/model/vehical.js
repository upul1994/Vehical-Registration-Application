const mongoose =require("mongoose")

const vehicalNew =new mongoose.Schema({

    vehicalNo:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String

    },

    image:{
        type:String
    }


},{
    collection:"vehical"
})

module.exports =mongoose.model('vehicalSchema',vehicalNew)
