const database = require("../infra/database");

exports.getPosts = () => {
  return database.query("select * from postIt.post");
};

exports.getPost = (id) => {
  return database.oneOrNone("select * from postIt.post where idPost=$1", [id]);
};

exports.savePost = (post) => {
  return database.one(
    "insert into postIt.post (titlePost, textPost) values ($1, $2) returning *",
    [post.title, post.text]
  );
};

exports.updatePost = (id, post) => {
  return database.none(
    "update postIt.post set titlePost = $1, textPost = $2 where idPost = $3",
    [post.title, post.text, id]
  );
};

exports.deletePost = (id) => {
  return database.none("delete from postIt.post where idPost = $1", [id]);
};
