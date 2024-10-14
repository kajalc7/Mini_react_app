import React from 'react';
import introImage from '../Images/Introimage.jpg'; // Your intro image
import foodVideo from '../Images/foodvideo.mp4'; // Your cooking video
import dancingVideo from '../Images/hobbies.mp4'; // Your dancing video

const Body = () => {
  return (
    <div className="p-8 space-y-16 bg-gray-200" style={{ backgroundImage: "url('../Images/background.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Intro Section */}
      <section className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-16">
        {/* Image on the left */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center">
          <img
            src={introImage}
            alt="About Me"
            className="w-72 h-72 rounded-full shadow-lg object-cover" // Larger circular image
          />
        </div>
        {/* Text on the right */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-bold italic mb-4">Hi, I'm Kajal Chaudhary</h2>
          <p className="text-lg font-sans">
            I’m a B.Tech graduate and currently working as a Software Engineer at a company based in Pune.
            My passion lies in technology and problem-solving, but I also love dancing and exploring new ways to
            express myself creatively. In this blog, I share both my professional journey and personal interests. 
            Let’s dive in!
          </p>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-16">
        {/* Text on the left */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold italic mb-4">My Hobbies</h2>
          <p className="text-lg font-sans">
            When I’m not coding, you can find me enjoying life and interacting with people. 
            I love dancing, which brings me a sense of joy and freedom—it’s my go-to way to unwind!
          </p>
        </div>
        {/* Video Section on the right */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <video
            controls
            className="w-64 h-64 rounded-lg shadow-lg object-cover" // Larger circular video
          >
            <source src={dancingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Passionate About Cooking Section */}
      <section className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-16">
        {/* Video Section on the left */}
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
          <video
            controls
            className="w-64 h-64 rounded-lg shadow-lg object-cover" // Larger circular video
          >
            <source src={foodVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text on the right */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-bold italic mb-4">Passionate About Cooking</h2>
          <p className="text-lg font-sans">
            Cooking is not just a hobby for me; it's a passion! I love experimenting with flavors and creating delicious dishes.
            It's a creative outlet that allows me to share my love for food with friends and family. Stay tuned for recipes and 
            culinary adventures!
          </p>
        </div>
      </section>

      {/* Random Thoughts Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold italic mb-4">Random Thoughts</h2>
        <p className="text-lg font-sans">
          Life is all about balance—balancing work, passions, and personal growth. Through this blog, I hope to share insights 
          from my professional journey in tech while also diving into the things that bring me joy, like dancing. 
          Stay tuned for more updates!
        </p>
      </section>
      
    </div>
  );
};

export default Body;
