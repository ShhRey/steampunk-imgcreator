import Navbar from '../components/Navbar.jsx';
import '../styles/Home.css';
import arenaVideo from '../assets/videos/arena.mp4';

export default function Home() {
	
    return (
        <div className="home">
            <Navbar />
            <video className='backgroundVideo' autoPlay loop muted src={arenaVideo} type="video/mp4" />
            <div className="overlay">
                <div className='leftContent'>
                    <h1>SteamPunk SSD</h1>
                    <h2>NJIT's annual beginner-friendly 24 hour hackathon hosted by its ACM chapter.</h2>
                    <h3>Who Can Participate?</h3>
                    <div className="highCards">
                        <div className="card1"></div>
                        <div className="card2"></div>
                        <div className='card3'></div>
                    </div>
                    <div className='descText'>
                        <h3>Hackathon Rules</h3>
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li className="listText1">Above legal age of majority in country of residence</li>
                            <li className="listText2">All countries/territories, excluding standard exceptions</li>
                            <li className="listText3">College students only</li>
                        </ol>
                    </div>
                </div>
            </div>
		</div>
    )
}