import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-container">
        <img alt="user-img" className="post-thumb" src={props.thumbnailUrl} />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
