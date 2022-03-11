const UserModel = require("../models/user-model");
const { genSalt, hash, compare } = require("bcrypt");
const { validateUser } = require("../utils/joi.validation");
class UserDomain {
  // create user
  async createUser(req, res) {
    const data = req.body;
    const { error } = validateUser(data);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let user = await UserModel.findOne({ emailAddress: req.body.emailAddress });
    if (user) {
      res.status(400).json({ message: "user already registered" });
    } else {
      user = new UserModel(data);
      const salt = await genSalt(10);
      user.password = await hash(user.password, salt);
      const result = await user.save();
      res.send(result);
    }
  }
  //to get all users
  async getAllUsers(req, res) {
    const user = await UserModel.find();
    res.send(user);
  }

  // get user by id
  async getUserById(req, res) {
    try {
      const _id = req.params.id;
      const result = await UserModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   edit user
  async editUser(req, res) {
    try {
      const data = req.body;
      const _id = req.params.id;
      const result = await UserModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  // delete user
  async deleteUser(req, res) {
    try {
      const _id = req.params.id;
      const result = await UserModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 0 } },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserDomain;
