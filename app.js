const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = new express();

//cors跨域中间件
app.use(cors());
//解析表单数据中间件 application/x-www-form-urlencoded格式
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.listen(1727, function () {
  console.log("server running in http://localhost:1727");
});
