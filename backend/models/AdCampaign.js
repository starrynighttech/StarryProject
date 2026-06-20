const mongoose =
require("mongoose")

const AdCampaignSchema =
new mongoose.Schema({

  businessId:String,

  title:String,

  videoUrl:String,

  budget:Number,

  rewardPerView:Number,

  views:{
    type:Number,
    default:0
  },

  active:{
    type:Boolean,
    default:true
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "AdCampaign",
  AdCampaignSchema
)
