import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, onPostSelect, onGetComments}) => {
  const renderedList = posts.map(post => {
    return (
    <PostItem
      id={post.post_id}
      text={post.post}
      user={post.user_id}
      onPostSelect={onPostSelect}
      onGetComments={onGetComments}
    />
);
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PostsList;
