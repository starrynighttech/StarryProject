const mongoose =
require("mongoose")

const InventorySchema =
new mongoose.Schema({

  productId:String,

  quantity:{
    type:Number,
    default:0
  },

  reorderLevel:{
    type:Number,
    default:5
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Inventory",
  InventorySchema
)
