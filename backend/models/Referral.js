const mongoose = require("mongoose")

const RewardSchema =
new mongoose.Schema({

  userId:String,

  type:{
    type:String,
    enum:[
      "referral",
      "promotion",
      "ad_reward",
      "loyalty"
    ]
  },

  amount:Number,

  status:{
    type:String,
    default:"approved"
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Reward",
  RewardSchema
)
