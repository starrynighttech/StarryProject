const mongoose =
require("mongoose")

const UserSessionSchema =
new mongoose.Schema({

  userId:String,

  deviceId:String,

  ip:String,

  lastActive:Date

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "UserSession",
  UserSessionSchema
)
