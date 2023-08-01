const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description:{
        type: String,
        
    }
})

module.exports = mongoose.model('role', roleSchema);