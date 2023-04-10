function cartcontrol(){
    return{
        cart( req,res){
            res.render('./customer/cart')
        }
    }
}

module.exports=cartcontrol