import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => {
        console.log(result.data);
        setSinglePost(result.data);
      })
      .catch((err) => {
        return navigate("/blog");
      });
  }, []);

  return (
    <>
      <h1>Single Blog</h1>
      <div className="singlePost">
        <h4>{singlePost.title}</h4>
        <p>{singlePost.body}</p>
      </div>
    </>
  );
}

export default SingleBlog;
