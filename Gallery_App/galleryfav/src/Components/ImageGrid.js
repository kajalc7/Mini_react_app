import React, { useEffect, useState } from 'react';

const ImageGrid = ({ onAddToFavourites }) => {
    const [listOfImages, setListOfImages] = useState([]);
    const [favouriteStatus, setFavouriteStatus] = useState({}); // To track if an image is added to favourites

    const importAll = (r) => {
        return r.keys().map(r);
    };

    useEffect(() => {
        const images = importAll(require.context('../Images/', false, /\.(png|jpe?g|svg)$/));
        setListOfImages(images);
    }, []);

    const handleAddToFavourites = (image) => {
        // Call the function from App.js
        onAddToFavourites(image);
        
        // Update the favourite status
        setFavouriteStatus((prevStatus) => ({
            ...prevStatus,
            [image]: true, // Mark this image as added to favourites
        }));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {listOfImages.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-lg shadow-lg p-4 transition-colors duration-300 hover:bg-gray-300 cursor-pointer">
                    <img src={image} alt="Gallery Item" className="w-full h-auto rounded-lg" />
                    <button
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        onClick={() => handleAddToFavourites(image)}
                    >
                        {favouriteStatus[image] ? "Added to Favourites" : "Add to Favourites"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
