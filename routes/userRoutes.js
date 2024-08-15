let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.get("/:id", (req, res) => {
  Controllers.userController.getUsersById(req, res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

//add an update user end point
router.patch("/update/:id", (req, res) => {
  Controllers.userController.updateUser(req.params.id, req.body, res);
});
module.exports = router;
