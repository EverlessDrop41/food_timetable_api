var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index.nunj");
});

router.use("/public", require("./view"));

module.exports = router;
