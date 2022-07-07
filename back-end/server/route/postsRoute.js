const express = require("express");
const router = express.Router();

//import services
const postsService = require("../service/postsService");

//rotas
router.get("/posts", async (req, res) => {
  const posts = await postsService.getPosts();
  res.json(posts);
});

router.get("/posts/:id", async (req, res) => {
  const post = await postsService.getPost(req.params.id);
  res.json(post);
});

router.post("/savePost", async (req, res) => {
  const post = req.body;
  const newPost = await postsService.savePost(post);
  res.json(newPost);
});

router.put("/updatePost/:id", async (req, res) => {
  const post = req.body;
  const newPost = await postsService.updatePost(req.params.id, post);
  res.end(newPost);
});

router.delete("/deletePost/:id", async (req, res) => {
  const post = await postsService.deletePost(req.params.id);
  res.end();
});

module.exports = router;
