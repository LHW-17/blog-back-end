const { article } = require("../model");

const addArticle = async function (data) {
  return await article.create(data);
};
module.exports = {
  add: addArticle,
};
