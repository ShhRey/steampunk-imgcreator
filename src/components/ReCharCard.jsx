import React from 'react';

const ReCharCard = ({ name, description, image }) => {
    return (
        <div id="charCardCont" className='p-3 m-2 mt-20 bg-gray-800 text-white rounded-lg w-80'>
            <div id="charCard" className='flex flex-col'>
                <h2 className='text-2xl font-bold text-center'>{name}</h2>
                <p className='mt-2 text-center text-wrap'>{description}</p>
                <div className='mt-4'><img src={image} alt="Card" className="w-48 h-48 object-cover justify-self-center" /></div>
            </div>
        </div>
    );
};

export default ReCharCard;