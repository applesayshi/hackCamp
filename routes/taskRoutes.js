const express = require("express");
const { completeTaskHandler } = require("../controllers/taskController.js");
const router = express.Router();

router.post('/complete', function(req, res){
    completeTaskHandler
  });

module.exports = router;