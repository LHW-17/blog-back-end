const mysql = require("mysql");
const sql = require("./sql");
const { config } = require("./config");
//封装数据库操作函数
const db = mysql.createPool(config);

//异步函数，调用时要在then里面获取值
class Table {
  constructor(name) {
    this.name = name;
    this.insert = async function (params) {
      let res = await this.query(sql[name].insert, params);
      return res;
    };
    this.update = async function (params) {
      return await this.query(sql[name].update, params);
    };
    this.delete = async function (params) {
      return await this.query(sql[name].delete, params);
    };
    this.queryById = async function (params) {
      return await this.query(sql[name].queryById, params);
    };
    this.queryAll = async function (params) {
      let res = await this.query(sql[name].queryAll, params);
      return res;
    };
  }
  query = async function (sql, params = {}) {
    let res = {};
    await new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          reject(new Error("connect failed"));
        }
        // console.log(Object.values(params));
        connection.query(sql, Object.values(params), (err, result) => {
          if (err) {
            connection.release();
            reject(new Error("query failed"));
            return;
          }
          res.data = result;
          connection.release();
          resolve(res);
        });
      });
    });
    res.message = res.message == undefined ? "success" : res.message;
    return res;
  };
}
//文章操作
const article = new Table("article");
article.queryList = async function () {
  let res = await article.query(sql.article.queryList);
  return res;
};
//分类管理
const category = new Table("category");
//评论管理
const comment = new Table("comment");
//用户管理
const user = new Table("user");

//test
/* article.queryAll().then((res) => {
  console.log(res);
}); */
module.exports = {
  article,
  category,
  comment,
  user,
};
