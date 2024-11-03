import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoPath from '../assets/videos/sp-logo.mp4';

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md bg-[rgba(30,30,30,0.7)]"> {/* Properly spaced items with justify-between */}
			<div className="flex-shrink-0 ml-9">
				<Link to="/">
					<video src={logoPath} alt="Logo" className="h-12 w-12" />
				</Link>
			</div>

			<div className="absolute left-1/2 transform -translate-x-1/2"> {/* Centered text with flex-1 */}
				<h1 className="text-2xl font-bold text-orange-400 glitter-text">
					<Link to="/" className="hover:text-orange-500">
						Welcome to the World of StreamPunk
					</Link>
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