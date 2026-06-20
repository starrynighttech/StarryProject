const mongoose = require("mongoose")

const ChatMessageSchema =
new mongoose.Schema({

  roomId:String,

  senderId:String,

  message:String

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "ChatMessage",
  ChatMessageSchema
)
