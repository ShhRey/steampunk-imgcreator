import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import PlayGame from './pages/PlayGame';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar /> {/* Include the Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-img" element={<Chatbot />} />
                    <Route path="/play-game" element={<PlayGame />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;