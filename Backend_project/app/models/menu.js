const mongoose=require('mongoose')

const Schema=mongoose.Schema



const menuSchema =new Schema(
    {
        name:{type:String},
        
        price:{type:Number}
    }
)



module.exports=mongoose.model('Menu',menuSchema)