import React from "react";
import "./PostContainer.css";
import Post from "./Post";

const PostsContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsContainer;
