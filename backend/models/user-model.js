const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "firstName is required"],
      minlength: [1, "firstName must be greater than or equal to 1 character"],
      maxlength: [
        255,
        "firstName must be less than or equal to 255 characters",
      ],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "lastName is required"],
      minlength: [1, "lastName must be greater than or equal to 1 character"],
      maxlength: [255, "lastName must be less than or equal to 255 characters"],
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, "password must be greater than or equal to 8 characters"],
      maxlength: [
        1024,
        "password must be less than or equal to 1024 characters",
      ],
      required: [true, "password is required"],
    },
    emailAddress: {
      type: String,
      trim: true,
      required: [true, "email is required"],
      unique: [true, "email is already exists"],
      match: [
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
        "email should be valid",
      ],
    },
    mobileNumber: {
      type: String,
      required: [true, "phoneNumber is required"],
      trim: true,
      match: [/^[6-9]{1}[0-9]{9}$/, "Phone number should be valid"],
    },
    isActive: {
      type: "boolean",
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("userDetail", userSchema);

module.exports = UserModel;
