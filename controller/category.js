const { category } = require("../model");

const getCategory = function () {
  category.queryAll().then((res) => {
    console.log(res);
  });
};
getCategory();
