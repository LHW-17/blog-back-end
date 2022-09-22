// const article = {
//   create: function (params) {
//     let res = {};
//     db.getConnection((err, connection) => {
//       if (err) {
//         throw new Error("db connection failed");
//       }
//       connection.query(
//         sql.article.insert,
//         [
//           params.title,
//           params.description,
//           params.content,
//           params.categoryId,
//           params.img,
//           params.stateNum,
//         ],
//         (err, result) => {
//           if (err) {
//             throw new Error("query create failed");
//           }
//           res.data = result;
//           connection.release();
//         }
//       );
//     });
//   },
//   update: function ({
//     title,
//     description,
//     content,
//     categoryId,
//     img,
//     stateNum,
//     id,
//   }) {
//     let res = {};
//     db.getConnection((err, connection) => {
//       if (err) {
//         throw new Error("db connection failed");
//       }
//       connection.query(
//         sql.article.update,
//         [title, description, content, categoryId, img, stateNum, id],
//         (err, result) => {
//           if (err) {
//             throw new Error("query update failed");
//           }
//           res.data = result;
//           connection.release();
//         }
//       );
//     });
//   },
//   delete: function ({ id }) {
//     let res = {};
//     db.getConnection((err, connection) => {
//       if (err) {
//         throw new Error("db connection failed");
//       }
//       connection.query(sql.article.delete, [id], (err, result) => {
//         if (err) {
//           throw new Error("query delete failed");
//         }
//         res.data = result;
//         connection.release();
//       });
//     });
//   },
//   queryById: function ({ id }) {
//     let res = {};
//     db.getConnection((err, connection) => {
//       if (err) {
//         throw new Error("db connection failed");
//       }
//       connection.query(sql.article.queryById, [id], (err, result) => {
//         if (err) {
//           throw new Error("query by id failed");
//         }
//         res.data = result;
//         connection.release();
//       });
//     });
//   },
// };
