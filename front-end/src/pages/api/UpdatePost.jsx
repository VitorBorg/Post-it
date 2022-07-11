import React from "react";
import axios from "axios";

export default function UpdatePost(id, postTitle, postText) {
  const url = `http://localhost:3000/updatePost/${id}`;
  const data = { title: postTitle, text: postText };

  if (data.title != "" && data.text != "") {
    axios.put(url, data, {
      "Access-Control-Allow-Credentials": true,
    });
  }
}
