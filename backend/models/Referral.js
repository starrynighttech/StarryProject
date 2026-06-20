const mongoose = require("mongoose")

const ReferralSchema = new mongoose.Schema({
  referrerId: String,
  referredUserId: String,

  rewardAmount: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    default: "pending"
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Referral",
  ReferralSchema
)
