const { article } = require("../model");

const addArticle = async function (data) {
  return await article.insert(data);
};
const articleList = async function () {
  return await article.queryList();
};
module.exports = {
  add: addArticle,
  getList: articleList,
};
