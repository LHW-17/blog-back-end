const category = require("../../controller/category");
//分类相关接口
function useCategoryRoute(router) {
  router.get("/getCategory", async function (req, res) {
    try {
      const result = await category.get();
      // console.log(result);
      res.send({ data: result.data, code: 200, message: "success" });
    } catch (e) {
      console.log(e);
      res.send({ code: 500, message: "error" });
      return;
    }
  });

  router.get("/deleteCategoryById", async function (req, res) {
    try {
      const result = await category.delete(req.query.id);
      res.send({ code: 200, message: "success" });
    } catch (e) {
      console.log(e);
      res.send({ code: 500, message: "fail to delete" });
    }
  });

  router.post("/addCategory", (req, res) => {
    let { body: data } = req;
    let result = {};
    try {
      data.forEach(async (item) => {
        if (item.id) {
        } else {
          result = await category.add(item);
        }
      });
      res.send({ code: 200, message: "success" });
    } catch (error) {
      console.log(error);
      res.send({ code: 500, message: "fail" });
    }
  });
}
module.exports = { useCategoryRoute };
