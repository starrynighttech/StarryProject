const mongoose = require("mongoose")

const DebitNoteSchema =
new mongoose.Schema({

  debitNumber:{
    type:String,
    unique:true
  },

  trackingCode:String,

  customerName:String,

  amount:Number,

  courierReference:String

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "DebitNote",
  DebitNoteSchema
)
