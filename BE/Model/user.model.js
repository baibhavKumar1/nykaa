const mongoose = require('mongoose');
const userSchema= mongoose.Schema(
    {
        name:String,
        avatar:String,
        email:String,
        password:String,
        created_at:{type:Date, default:Date.now},
        updated_at:{type:Date, default:Date.now}
    },
    {versionKey:false}
)
const UserModel= mongoose.model('User',userSchema)

module.exports = UserModel