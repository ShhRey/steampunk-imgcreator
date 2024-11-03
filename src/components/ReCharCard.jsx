import React from 'react';

const ReCharCard = ({ name, description, image }) => {
    return (
        <div className="bg-gray-800 text-white">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="mt-2">{description}</p>
            <div className="mt-4">
                <img src={image} alt="Card" className="w-full h-48 object-cover rounded-md" />
            </div>
        </div>
    );
};

export default ReCharCard;