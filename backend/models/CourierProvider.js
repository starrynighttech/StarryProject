const mongoose =
require("mongoose")

const CourierProviderSchema =
new mongoose.Schema({

  name:String,

  apiUrl:String,

  active:{
    type:Boolean,
    default:true
  }

})

module.exports =
mongoose.model(
  "CourierProvider",
  CourierProviderSchema
)
