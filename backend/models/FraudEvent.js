const mongoose =
require("mongoose")

const FraudEventSchema =
new mongoose.Schema({

  userId:String,

  type:String,

  severity:String,

  description:String

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "FraudEvent",
  FraudEventSchema
)
