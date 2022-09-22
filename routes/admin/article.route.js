const article = require("../../controller/article");

function useArticleRoute(router) {
  router.post("/addArticle", async (req, res) => {
    const data = req.body;
    let result = await article.add(data);
  });
}

module.exports = { useArticleRoute };
