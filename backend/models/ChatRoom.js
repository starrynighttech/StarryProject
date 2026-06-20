const mongoose = require("mongoose")

const ChatRoomSchema =
new mongoose.Schema({

  customerId:String,

  agentId:String,

  status:{
    type:String,
    default:"open"
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "ChatRoom",
  ChatRoomSchema
)
