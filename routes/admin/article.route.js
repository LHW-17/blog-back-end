const article = require("../../controller/article");

function useArticleRoute(router) {
  router.post("/addArticle", async function (req, response) {
    const data = req.body;
    const result = {};
    data.tag = data.tag.join("-");
    // console.log(data);
    //当id存在则调用修改，否则用新增
    if (data.id) {
      try {
        let { id, createTime, updateTime, isDeleted, ...params } = data;
        let res = await article.editArticle(data.id, params);
        // console.log(res);
        response.send({ code: 200, message: res.message });
      } catch (e) {
        // console.log(e);
        response.status(500).send(e.message);
      }
    } else {
      try {
        let res = await article.add(data);
        result.insertId = res.data.insertId;
        result.message = res.message;
        result.code = 200;
        response.send(result);
      } catch (error) {
        console.log(error.message);
        response.send({ code: 500, message: "failed" });
      }
    }
  });
  router.get("/articleList", async function (req, res) {
    let result = {};
    try {
      result.data = await article.getList();
      result.code = 200;
      res.send(result);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  router.get("/getArticleById", async (req, res) => {
    let result = {};
    try {
      result = await article.getById(req.query.id);
      result.code = 200;
      res.send(result);
    } catch (error) {
      res.status(500).send(e.message);
    }
  });
  router.post("/editArticle", async (req, res) => {
    const { id, data } = req.body;
    try {
      await article.editArticle(id, data);
      res.send({
        code: 200,
        message: "success",
      });
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  router.get("/deleteArticle", async (req, res) => {
    let id = req.query.id;
    try {
      let result = await article.delete(id);
      res.send({ code: 200, message: "success" });
    } catch (error) {
      res.status(500).send({
        code: 500,
        message: error.message,
      });
    }
  });
}

module.exports = { useArticleRoute };
