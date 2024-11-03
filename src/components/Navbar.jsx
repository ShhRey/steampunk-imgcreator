import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoPath from '../assets/videos/sp-logo.mp4'

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 border-b border-orange-500 bg-black opacity-90">
			<div className="flex-shrink-0">
				<video src={logoPath} alt="Logo" className="h-8 w-8" />
			</div>

			<div className="flex-grow text-center">
				<h1 className="text-xl text-center font-bold glitter-text">
					<Link to="/">Steam Punk</Link>
				</h1>
			</div>

			<div className="flex space-x-4">
				<Link to="/play-game" className="px-4 py-2 font-semibold rounded hover:bg-orange-600 glitter-button">
					Play Game
				</Link>
				<Link to="/chatbot" className="px-4 py-2 font-semibold rounded hover:bg-orange-600 glitter-button">
					StreamPunk Chat
				</Link>
			</div>
		</nav>
	);
}