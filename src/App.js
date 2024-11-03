import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import PlayGame from './pages/PlayGame';
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Global Context for a group of Components
export const AppContext = createContext();

function App() {
	return (
		<div className="App">
			<AppContext.Provider value={{}}>
				<Router>
					<Navbar />  {/* Navbar is always present */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/chatbot" element={<Chatbot />} />
						<Route path="/play-game" element={<PlayGame />} />
					</Routes>
				</Router>
    		</AppContext.Provider>
		</div>
	);
}

export default App;