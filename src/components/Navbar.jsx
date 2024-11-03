import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-orange-500 bg-black">
      {/* Left Side: GIF Image */}
      <div className="flex-shrink-0">
        <img src="path_to_logo.gif" alt="Logo" className="h-8 w-8" />
      </div>

      {/* Center: Website Name with Glitter Effect */}
      <div className="flex-grow text-center">
        <h1 className="text-xl text-center font-bold glitter-text"><Link to="/">Steam Punk</Link></h1>
      </div>

      {/* Right Side: Buttons with Glitter Effect */}
      <div className="flex space-x-4">
        <Link
          to="/play-game"
          className="px-4 py-2 font-semibold rounded hover:bg-orange-600 glitter-button"
        >
          Play Game
        </Link>
        <Link
          to="/chatbot"
          className="px-4 py-2 font-semibold rounded hover:bg-orange-600 glitter-button"
        >
          StreamPunk Chat
        </Link>
      </div>
    </nav>
  );
}