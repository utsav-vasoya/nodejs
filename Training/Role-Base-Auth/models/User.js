const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
