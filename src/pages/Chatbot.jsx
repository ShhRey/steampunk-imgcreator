// Chatbot.js
import React, { useState } from "react";
import "react-chatbot-kit/build/main.css";
import axios from "axios";
import chatbotVideo from '../assets/videos/chatbot.mp4';

const ChatbotComponent = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("Gadgeteer Garvin");
  const [isDropupOpen, setIsDropupOpen] = useState(false); // State for drop-up menu
  const [loading, setLoading] = useState(false); // State for loading animation

  // Function to handle sending message
  const handleSend = async () => {
    if (input.trim() === "") return;

    // Display user's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: input }
    ]);
    
    // Clear input immediately after sending
    setInput("");

    // Show loading animation
    setLoading(true);

    try {
      // Trigger API call with selected character and message
      const response = await axios.post("http://98.81.229.68:8000/api/chatbot_api/message", {
        characters: selectedCharacter, // Include selected character in API call
        message: input,
      });
      
      // Display API response
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: response.data.message }
      ]);
    } catch (error) {
      console.error("Error fetching API response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Sorry, something went wrong. Please try again." }
      ]);
    } finally {
      // Hide loading animation
      setLoading(false);
    }
  };

  // Function to handle character selection and reset messages
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setMessages([]); // Reset messages when character changes
    setIsDropupOpen(false); // Close the drop-up menu after selection
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#2b2a2a]">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-80" src={chatbotVideo} autoPlay loop muted />

      {/* Chatbot Container */}
      <div className="bg-[#3e3d3d] border-4 border-yellow-800 rounded-xl max-w-[90vw] max-h-[90vh] min-w-[400px] min-h-[400px] w-[60vw] h-[65vh] relative shadow-[0px_0px_20px_rgba(0,0,0,0.7)] z-10 flex flex-col">
        
        {/* Chat Display */}
        <div className="border border-yellow-800 flex-grow p-4 bg-gradient-to-b from-[#4a4a4a] to-[#2b2a2a] overflow-y-auto rounded-t-xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 m-1 ${
                message.type === "user" ? "text-right text-[#e5c07b]" : "text-left text-[#d4af37]"
              }`}
            >
              {message.text}
            </div>
          ))}
          {/* Loading animation */}
          {loading && (
            <div className="p-2 m-1 text-left text-[#d4af37] italic">Bot is typing...</div>
          )}
        </div>

        {/* Bottom Section: Character Select and Input */}
        <div className="border-t border-yellow-800 p-4 flex items-center bg-[#3e3d3d] relative rounded-b-xl">
          
          {/* Character Select Drop-up */}
          <div className="relative">
            <button
              onClick={() => setIsDropupOpen((prev) => !prev)} // Toggle drop-up on click
              className="w-10 h-10 rounded-full bg-yellow-700 border-2 border-yellow-900 shadow-lg focus:outline-none flex items-center justify-center"
            >
              ☸️
            </button>
            {isDropupOpen && (
              <div className="absolute bottom-12 left-0 bg-yellow-800 border border-yellow-900 rounded shadow-lg text-[#d4af37]">
                {["Gadgeteer Garvin", "Professor Cogsworth", "Colonel Rustbottom", "Captain Gearheart", "Lady Clockwork"].map((character, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-yellow-700 cursor-pointer"
                    onClick={() => handleCharacterSelect(character)}
                  >
                    {character}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Text Input */}
          <input
            type="text"
            placeholder={`Type here to chat with ${selectedCharacter}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send message on Enter key press
            className="flex-grow ml-4 p-3 bg-transparent border border-yellow-800 rounded text-[#e5c07b] placeholder-[#d4af37] outline-none focus:ring-2 focus:ring-yellow-700"
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-yellow-700 rounded shadow-lg text-[#d4af37] font-bold hover:bg-yellow-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;