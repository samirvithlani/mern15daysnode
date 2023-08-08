const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    userrole:{
        type:Schema.Types.ObjectId,
        ref:'role' //role model export
    }

})
//model 
// mongoose.model('users',userSchema);
// module.exports = userSchema;
module.exports = mongoose.model('users',userSchema);