const router =
require("express").Router()

const ChatRoom =
require("../models/ChatRoom")

router.post("/room",
async(req,res)=>{

  const room =
  await ChatRoom.create(
    req.body
  )

  res.status(201).json(room)

})

router.get("/rooms",
async(req,res)=>{

  const rooms =
  await ChatRoom.find()

  res.json(rooms)

})

module.exports = router
