const mongooose =require('mongoose')

 

const UserSchema = new mongooose.Schema({

    Name:String,

    Email:String,

    Password:String,

    Phnumber:Number,
    isActive:{type:Boolean, default:true},
    isAdmin: {type:Boolean, default:false}

    

})
const UserModel = mongooose.model("Users",UserSchema)

module.exports=UserModel