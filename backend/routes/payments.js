const router = require("express").Router()

router.post("/paynow", async (req, res) => {

  try {

    const { amount } = req.body

    res.json({
      success: true,
      message:
        "Paynow integration pending",
      amount
    })

  } catch (err) {

    res.status(500).json({
      message: err.message
    })

  }

})

module.exports = router
