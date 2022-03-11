const UserDomain = require("../domains/user-domain");
const express = require("express");
const router = express.Router();

class UserController {
  // create user
  static createUser(req, res) {
    const user = new UserDomain();
    user.createUser(req, res);
  }
  // get all user
  static getAllUsers(req, res) {
    const user = new UserDomain();
    user.getAllUsers(req, res);
  }
  // get user by id
  static getUserById(req, res) {
    const user = new UserDomain();
    user.getUserById(req, res);
  }
  // edit user
  static editUser(req, res) {
    const user = new UserDomain();
    user.editUser(req, res);
  }
  // delete user
  static deleteUser(req, res) {
    const user = new UserDomain();
    user.deleteUser(req, res);
  }
}

// user routes
router.post("/", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/edit/:id", UserController.editUser);
router.put("/delete/:id", UserController.deleteUser);

module.exports = router;
