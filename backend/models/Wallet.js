const mongoose = require("mongoose")

const WalletSchema =
new mongoose.Schema({

  userId:{
    type:String,
    required:true
  },

  balance:{
    type:Number,
    default:0
  },

  totalEarned:{
    type:Number,
    default:0
  },

  totalSpent:{
    type:Number,
    default:0
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Wallet",
  WalletSchema
)
