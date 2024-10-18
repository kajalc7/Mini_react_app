import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate('/'); // Navigate to the homepage when a category is selected
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-white">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">Contact</Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="text-white"
            onClick={() => handleCategoryClick('Bollywood')}
          >
            Bollywood
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="text-white"
            onClick={() => handleCategoryClick('News')}
          >
            News
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="text-white"
            onClick={() => handleCategoryClick('Sports')}
          >
            Sports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
