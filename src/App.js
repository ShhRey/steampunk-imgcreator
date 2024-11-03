import Home from './pages/Home';
import GenImg from './pages/GenImg';
import PlayGame from './pages/PlayGame';

import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Context for a group of Components
export const AppContext = createContext();

function App() {
	return (
		<div className="App">
			<AppContext.Provider value={{}}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-img" element={<GenImg />} />
						<Route path="/play-game" element={<PlayGame />} />
					</Routes>
				</Router>
    		</AppContext.Provider>
		</div>
	);
}

export default App;