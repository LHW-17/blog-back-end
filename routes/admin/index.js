const express = require("express");
const router = express.Router();
const { expressjwt, UnauthorizedError } = require("express-jwt");
const jwt = require("jsonwebtoken");
const bodyParse = require("body-parser");
const { useArticleRoute } = require("./article.route");
const { useCategoryRoute } = require("./category.route");

const admin = {
  account: "admin",
  password: "123456",
};
//使用jwt中间件
router.use(
  expressjwt({
    secret: "lhw17",
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/admin/login",
      {
        url: /^\/admin\/view/,
        methods: ["GET", "POST"],
      },
    ],
  })
);
//校验token失败时的处理
router.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
    return;
  }
  next();
});
// 输出时间
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  console.log("FOR:", req.path);
  next();
});
// 后台登录api
router.post("/login", function (req, res) {
  // console.log(req.body);
  if (
    req.body.account === admin.account &&
    req.body.password === admin.password
  ) {
    console.log("admin login");
    res.send({
      code: 200,
      message: "success",
      token: jwt.sign(
        {
          name: "admin",
          data: "123456",
        },
        "lhw17",
        { expiresIn: "1d" } //可使用"1d"的形式表示一天
      ),
    });
    return;
  } else {
    res.send({
      code: -1,
      message: "account or password error",
    });
    return;
  }
});
useArticleRoute(router);
useCategoryRoute(router);
module.exports = router;
