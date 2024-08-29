import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post ID: {postId}</h2>
      {/* Post content fetched based on postId */}
    </div>
  );
};

export default Post;
