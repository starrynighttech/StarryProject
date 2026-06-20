const mongoose = require("mongoose")

const BusinessSchema =
new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  ownerId:{
    type:String,
    required:true
  },

  email:String,

  phone:String,

  logo:String,

  verified:{
    type:Boolean,
    default:false
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Business",
  BusinessSchema
)
