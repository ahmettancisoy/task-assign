const taskController = require("../controllers/taskController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.render("add-provider");
  })
  .post(taskController.insertTask);

module.exports = router;
