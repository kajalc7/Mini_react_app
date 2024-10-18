import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Post = ({ selectedCategory, posts }) => {
  const { id } = useParams();

  // Display single post details if an ID is present in the URL
  if (id) {
    const selectedPost = posts[selectedCategory].find(post => post.id === parseInt(id));
    if (!selectedPost) {
      return <div>Post not found.</div>;
    }

    return (
      <div className="post-details p-6">
        <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
        <p className="text-lg">{selectedPost.content}</p>
      </div>
    );
  }

  // Display list of posts for the selected category
  return (
    <div className="post-list p-6">
      <h1 className="text-2xl font-bold mb-6">{selectedCategory} Posts</h1>
      <div className="grid grid-cols-4 gap-6">
        {posts[selectedCategory].map(post => (
          <div key={post.id} className="post-card border p-4 rounded-lg shadow-lg">
            <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
