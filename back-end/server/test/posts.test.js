const axios = require("axios");

test("Should get posts", async () => {
  const response = await axios({
    url: "http://localhost:3000/posts",
    method: "get",
  });

  const posts = response.data;

  expect(posts).toHaveLength(4);
});

test("Should have a post", async () => {
  const data = { titlePost: "vitorvitor", textPost: "corpo do post-it" };
  const response = await request("http://localhost:3000/posts", "post", data);
  const post = response.data;

  expect(data.titlePost).toBe(data.titlePost);
  expect(data.textPost).toBe(data.textPost);

  // await postsS
});
