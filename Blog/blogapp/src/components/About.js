import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
        <h2 className="text-4xl font-bold italic mb-4">Connect with Me</h2>
        <p className="text-lg mb-6">
          I'm passionate about sharing my journey and connecting with like-minded individuals. 
          Feel free to follow me on my social media!
        </p>
        <div className="space-y-4">
          <a 
            href="https://www.youtube.com/@kajalchaudhary8173" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            YouTube Channel
          </a>
          <a 
            href="https://www.instagram.com/kajalchaudhary_787/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/in/kajal-chaudhary-036a411b3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
