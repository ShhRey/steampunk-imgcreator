import React from 'react';
import { Link } from "react-router-dom";

const GameCard = () => {
	return (
		<div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg relative">
			<div className="text-yellow-400 text-5xl mb-4">
				{/* Game Icon */}
				🎮
			</div>
			<h2 className="text-white text-2xl font-bold mb-2">
				Ready to Play?
			</h2>
			<p className="text-gray-300 mb-4">
				Dive into the steampunk world and test your skills!
			</p>
			<Link to="/play-game" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md transform hover:scale-105">
				Play Game
			</Link>
		</div>
	);
};

export default GameCard;