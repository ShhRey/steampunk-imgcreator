import React from 'react';
import { Link } from "react-router-dom";

const ChatbotCard = () => {
	return (
		<div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg relative">
			<div className="text-blue-400 text-5xl mb-4 animate-pulse">
				{/* Chatbot Icon */}
				💬
			</div>
			<h2 className="text-white text-2xl font-bold mb-2">
				Need Assistance?
			</h2>
			<p className="text-gray-300 mb-4">
				Chat with our bot to get answers in real-time!
			</p>
			<Link 
			to="/chatbot"
			className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md transform hover:scale-105">
				Chat Now
			</Link>
		</div>
	);
};

export default ChatbotCard;