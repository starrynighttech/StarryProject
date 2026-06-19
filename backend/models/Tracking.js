const mongoose = require("mongoose")

const TrackingSchema = new mongoose.Schema({

  internalCode:String,

  courierCode:String,

  status:String,

  location:String

},{
  timestamps:true
})

module.exports = mongoose.model(
  "Tracking",
  TrackingSchema
)
