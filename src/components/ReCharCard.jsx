import React from 'react';

const ReCharCard = ({ name, description, image }) => {
    return (
        <div id="charCardCont" className='flex flex-col p-3 m-1 bg-gray-800 text-white rounded-lg'>
            <div id="charCard" className='flex flex-col'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='mt-2'>{description}</p>
                <div className='mt-4'><img src={image} alt="Card" className="w-48 h-48 object-cover" /></div>
            </div>
        </div>
    );
};

export default ReCharCard;