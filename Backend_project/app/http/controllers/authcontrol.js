const User = require('../../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')



function authcontrol(){
    return{
        login( req,res){
            res.render('./auth/login')
        },

        async postLogin(req,res,){
               try{
                  const {email,password}=req.body
                  const result=await User.findOne({email:email})
                 
                  if(result != null){
                    const ismatch =await bcrypt.compare(password,result.password)
                    if(result.email==email && ismatch){
                        return res.redirect('/')
                        res.send("login successfully")
                      }else{
                        res.redirect('/login')
                        
                      }
                  }else{
                    res.redirect('/resister')
                  }
               } catch(error){console.log(error)}
        },

        resister( req,res){
            res.render('./auth/resister')
        },

        async postResister( req,res){
            const hashpassword=await bcrypt.hash(req.body.password,10)
            try{
                const user = new User({
                    email:req.body.email,
                    password:hashpassword,
                })
                await user.save()
                res.redirect('/login')
                
                

            }catch(error){console.log(error)}
           },

        }         
        
}

module.exports=authcontrol