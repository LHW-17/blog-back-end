const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");
// 输出时间
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  console.log("FOR:", req.path);
  next();
});

router.get("/test", (req, res) => {
  let data = req.query;
  res.send({
    code: 200,
    message: data.lhw + "hello",
  });
});

module.exports = router;
