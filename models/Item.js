const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    creationDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Items',ItemSchema)