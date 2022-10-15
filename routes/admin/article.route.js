const article = require("../../controller/article");

function useArticleRoute(router) {
  router.post("/addArticle", async function (req, res) {
    const data = req.body;
    const result = {};
    data.tag = data.tag.join("-");
    console.log(data);
    try {
      let res = await article.add(data);
      result.insertId = res.data.insertId;
      result.message = res.message;
      result.code = 200;
    } catch (error) {
      console.log(error.message);
      res.send({ code: 500, message: "failed" });
    }
    // console.log(result);
    res.send(result);
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
}

module.exports = { useArticleRoute };
