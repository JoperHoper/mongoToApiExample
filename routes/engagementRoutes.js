let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all posts
router.get("/", (req, res) => {
  Controllers.engagementController.getEngagement(res);
});

// router.get("/:id", (req, res) => {
//   Controllers.userController.getUsersById(req, res);
// });

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.engagementController.createEngagement(req.body, res);
});

// router.put("/:id", (req, res) => {
//   Controllers.userController.updateUser(req, res);
// });

// router.delete("/:id", (req, res) => {
//   Controllers.userController.deleteUser(req, res);
// });

// //add an update user end point
// router.patch("/update/:id", (req, res) => {
//   Controllers.userController.updateUser(req.params.id, req.body, res);
// });

module.exports = router;
