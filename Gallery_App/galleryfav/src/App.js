import React, { useState } from 'react';
import ImageGrid from './Components/ImageGrid';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleAddToFavourites = (image) => {
    if (!favourites.includes(image)) {
      setFavourites((prevFavourites) => [...prevFavourites, image]);
    } else {
      alert('This image is already in your favourites!');
    }
  };

  const handleShowFavourites = () => {
    setShowFavourites(true);
  };

  const handleGoBackToGallery = () => {
    setShowFavourites(false); // Show the gallery again
  };

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-start p-4">
      <h1 className="text-center font-bold bg-blue-300 text-4xl mt-8 p-4 rounded">
        Welcome to my Gallery 💙
      </h1>
      <button
        className="px-4 py-2 bg-red-200 m-4 rounded-md"
        onClick={handleShowFavourites}
      >
        Favourites ❤
      </button>

      <div className="w-full max-w-6xl mx-auto">
        {showFavourites ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Favourite Images</h2>
            {favourites.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  {favourites.map((favImage, index) => (
                    <div key={index} className="bg-yellow-200 rounded-lg shadow-lg p-4">
                      <img src={favImage} alt="Favourite Item" className="w-full h-auto rounded-lg" />
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-green-200 rounded-md"
                  onClick={handleGoBackToGallery}
                >
                  Go Back to Gallery
                </button>
              </div>
            ) : (
              <p>No favourites yet!</p>
            )}
          </div>
        ) : (
          <ImageGrid onAddToFavourites={handleAddToFavourites} />
        )}
      </div>
    </div>
  );
}

export default App;
