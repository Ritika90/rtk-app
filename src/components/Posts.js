import React, { useEffect, Children } from "react";
import { Link } from "react-router-dom";
import { useLazyGetPostsQuery } from "api/posts/getPosts";

function Posts() {
  const [getPosts, { data }] = useLazyGetPostsQuery();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {Children.toArray(
        data &&
          data.map((res) => (
            <Link to={`/posts/${res.id}`}>
              <h6>{res.title}</h6>
            </Link>
          ))
      )}
    </div>
  );
}

export default Posts;
