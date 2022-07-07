const postsData = require("../data/postsData");

exports.getPosts = () => {
  return postsData.getPosts();
};

exports.getPost = (id) => {
  return postsData.getPost(id);
};

exports.savePost = (post) => {
  return postsData.savePost(post);
};

exports.updatePost = (id, post) => {
  return postsData.updatePost(id, post);
};

exports.deletePost = (id) => {
  return postsData.deletePost(id);
};
