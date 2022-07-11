import React from "react";
import axios from "axios";

export default function deletePost(id) {
  const url = `http://localhost:3000/deletePost/${id}`;

  axios.delete(url, {
    "Access-Control-Allow-Credentials": true,
  });
}

//http://localhost:3000/updatePost/5
