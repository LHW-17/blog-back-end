const { category } = require("../model");

const getCategory = async function () {
  return await category.queryAll();
};
const deleteCategoryById = async function (id) {
  return await category.delete(id);
};
const updateCategoryById = async function (title, id) {
  return await category.update({ title, id });
};
const addCategory = async function (data) {
  return await category.insert(data);
};
module.exports = {
  get: getCategory,
  delete: deleteCategoryById,
  update: updateCategoryById,
  add: addCategory,
};
