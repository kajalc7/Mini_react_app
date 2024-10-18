// src/components/PostCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${category}/${post.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
    </div>
  );
};

export default PostCard;
