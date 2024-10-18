import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Post from './components/Post';
import About from './components/About'; // Assuming you have an About component
import Contact from './components/Contact'; // Assuming you have a Contact component
import { posts } from './Data/Dummydata';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Bollywood');

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route path="/" element={<Post selectedCategory={selectedCategory} posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Pass selectedCategory and posts to display full post details when clicking on a post */}
        <Route path="/post/:id" element={<Post selectedCategory={selectedCategory} posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
