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
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);
const UserSchema = mongoose.model('User', userSchema);

const User = {
  register: (userData) => {
    return UserSchema.create(userData);
  },
  getUsers: () => {
    return UserSchema.find();
  },
   getUserById: (id) => {
    return UserSchema.findById(id);
  },
  updata: (id, data) => {
    return UserSchema.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    })
  }
};

module.exports = User;
