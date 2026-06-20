const router =
require("express").Router()

const DebitNote =
require("../models/DebitNote")

const generateDebitNumber =
require("../utils/generateDebitNumber")

router.post("/",
async(req,res)=>{

  const debit =
  await DebitNote.create({

    ...req.body,

    debitNumber:
    generateDebitNumber()

  })

  res.status(201).json(debit)

})

module.exports = router
