const mongoose =
require("mongoose")

const AnalyticsSchema =
new mongoose.Schema({

  date:Date,

  users:Number,

  revenue:Number,

  orders:Number

})

module.exports =
mongoose.model(
  "Analytics",
  AnalyticsSchema
)
