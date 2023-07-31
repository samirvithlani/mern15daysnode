const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    }

})
//model 
// mongoose.model('users',userSchema);
// module.exports = userSchema;
module.exports = mongoose.model('users',userSchema);