import React, { useState } from 'react';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('default');

  const handleSendMessage = () => {
    // Implement the function to handle sending the message
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-yellow-400">
      <div className="w-96 h-[500px] border border-yellow-400 rounded-lg p-4">
        {/* Navbar */}
        <div className="h-10 bg-gray-800 mb-2 rounded-lg flex items-center justify-center">
          <p className="text-sm">Navbar</p>
        </div>

        {/* Chat Display */}
        <div className="h-[350px] bg-gray-800 rounded-lg mb-2 overflow-y-auto">
          <p className="text-sm text-center mt-20">Where chat will appear</p>
        </div>

        {/* Input Area */}
        <div className="flex items-center bg-gray-800 rounded-lg p-2">
          {/* Character Select Dropdown */}
          <select
            className="bg-gray-700 text-yellow-400 p-1 rounded mr-2"
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
          >
            <option value="default">Select Character</option>
            {/* Add other options here */}
          </select>

          {/* Message Input */}
          <input
            type="text"
            className="flex-grow bg-gray-700 text-yellow-400 p-1 rounded mr-2"
            placeholder="Type here to chat with the character"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1 px-3 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}