const mongoose =
require("mongoose")

const SystemMetricSchema =
new mongoose.Schema({

  cpu:Number,

  memory:Number,

  activeUsers:Number,

  requests:Number

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "SystemMetric",
  SystemMetricSchema
)
