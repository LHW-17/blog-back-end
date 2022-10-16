const article = {
  insert:
    "INSERT INTO article(title, description, categoryId, imgUrl, tag, content, stateNum) VALUES(?,?,?,?,?,?,?)",
  update:
    "UPDATE article SET title=?, description=?, content=?, categoryId=?, imgUrl=?, stateNum=?, tag=? WHERE id=?",
  delete: "UPDATE article SET isDeleted=1 WHERE id=?",
  queryById: "SELECT * FROM article WHERE id=?",
  queryAll: "SELECT * FROM article",
  queryList:
    "SELECT article.id, article.title as articleTitle, categoryId, category.title as cTitle, tag, article.createTime, article.updateTime FROM article, category WHERE categoryId=category.id and article.isDeleted=0",
};
const category = {
  insert: "INSERT INTO category(title) VALUES(?)",
  update: "UPDATE category SET title=? WHERE id=?",
  delete: "UPDATE category SET isDeleted=1 WHERE id=?",
  queryById: "SELECT * FROM category WHERE id=?",
  queryAll: "SELECT * FROM category WHERE isDeleted=0",
};
const user = {
  insert:
    "INSERT INTO user(username, email, password, headImg) VALUES(?,?,?,?)",
  update:
    "UPDATE user SET username=?, email=?, password=?, headImg=?,  WHERE id=?",
  delete: "UPDATE user SET isDeleted=1 WHERE id=?",
  queryById: "SELECT * FROM user WHERE id=?",
  queryAll: "SELECT * FROM user",
};
const comment = {
  insert:
    "INSERT INTO comment(content, userId, articleId, parentId) VALUES(?,?,?,?)",
  update:
    "UPDATE comment SET content=?, userId=?, articleId=?, parentId=? WHERE id=?",
  delete: "UPDATE comment SET isDeleted=1 WHERE id=?",
  queryById: "SELECT * FROM comment WHERE id=?",
  queryAll: "SELECT * FROM comment",
};
module.exports = {
  article,
  category,
  user,
  comment,
};
