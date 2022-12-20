import React, { useEffect } from "react";
import { useLazyGetPostByIdQuery } from "api/posts/getPostById";
import { useParams } from "react-router-dom";

function SinglePost() {
  const [getPostById, { data }] = useLazyGetPostByIdQuery();
  const { id } = useParams();

  useEffect(() => {
    getPostById(id);
  }, []);

  return (
    <div>
      <h2>SinglePost</h2>
      <h5>{data.title}</h5>
      <h6>{data.body}</h6>
    </div>
  );
}

export default SinglePost;
