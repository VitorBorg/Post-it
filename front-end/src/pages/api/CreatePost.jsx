import React from "react";
import axios from "axios";

export default function createPost(postTitle, postText) {
  const url = "http://localhost:3000/savePost";
  const data = { title: postTitle, text: postText };

  if (data.title != "" && data.text != "") {
    axios.post(url, data, {
      "Access-Control-Allow-Credentials": true,
    });
  }
}
