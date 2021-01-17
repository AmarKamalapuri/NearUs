const { text } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    zip: {
      type: Number,
      required: true,
    },
    address: {
      type: Array,
      default: [],
    },
    cart: {
      type: Array,
      default: [],
    },
    business_type: {
      type: Array,
      default: [],
    },
    business_information: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
