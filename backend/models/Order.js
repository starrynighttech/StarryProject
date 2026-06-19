const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({

  userId: String,

  products: Array,

  total: Number,

  paymentStatus: {
    type: String,
    default: "pending"
  },

  trackingCode: String,

  status: {
    type: String,
    default: "processing"
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("Order", OrderSchema)
