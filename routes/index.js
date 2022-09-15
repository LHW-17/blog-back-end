var express = require("express");
var router = express.Router();

// 输出时间
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router;
