const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body

    const existing = await User.findOne({ email })

    if (existing) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    const hashedPassword =
      await bcrypt.hash(password, 10)

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      referralCode:
        Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase()
    })

    res.json(user)

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body

    const user =
      await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials"
      })
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!valid) {
      return res.status(400).json({
        message: "Invalid credentials"
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    )

    res.json({
      token,
      user
    })

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

module.exports = router
