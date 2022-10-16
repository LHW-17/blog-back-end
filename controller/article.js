const { article } = require("../model");

const addArticle = async function (data) {
  return await article.insert(data);
};
const articleList = async function () {
  return await article.queryList();
};
const getById = async function (id) {
  return await article.queryById(id);
};
const editArticle = async function (id, data) {
  // console.log(data);
  return await article.update({ ...data, id });
};
const deleteById = async function (id) {
  return await article.delete(id);
};
module.exports = {
  add: addArticle,
  getList: articleList,
  getById,
  editArticle,
  delete: deleteById,
};
