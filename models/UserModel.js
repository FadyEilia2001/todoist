const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please provide a first name"],
    maxLength: 15,
    minLength: 3,
    validate: {
      validator: (firstName) =>
        validator.isAlpha(firstName, ["en-US"], { ignore: " " }),
      message: "First name must be all letters",
    },
  },
  lastName: {
    type: String,
    maxLength: 15,
    minLength: 3,
    default: "last name",
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    validate: {
      validator: validator.isEmail,
      message: "please provide valid email",
    },
  },
  location: {
    type: String,
    minLength: 3,
    default: "my location",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    // validate: {
    //   validator: validator.isStrongPassword,
    //   message: "Please choose a stronger password",
    // },
    minLength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
});

UserSchema.method.comparePassword = async function (candidatePassword) {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

UserSchema.method.createJWT = async function () {
  return jwt.sign({ userId: this._id }, SecretKey, {
    expiresIn: "30d",
  });
};

module.exports = new mongoose.model("User", UserSchema);
