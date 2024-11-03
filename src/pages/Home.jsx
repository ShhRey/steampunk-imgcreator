import Navbar from '../components/Navbar.jsx';
import '../styles/Home.css';
import arenaVideo from '../assets/videos/arena.mp4';
import ReCharCard from '../components/ReCharCard.jsx';
import char1path from '../assets/images/char1.png';
import char2path from '../assets/images/char2.png';
import char3path from '../assets/images/char3.png';
import char4path from '../assets/images/char4.png';
import char5path from '../assets/images/char5.png';

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
            <div className='horScrollContainer'>
                <ReCharCard name={'Gadgeteer Garvin'} description={'Gadgeteer Garvin is an eccentric inventor and skilled engineer'} image={char1path} />
                <ReCharCard name={'Professor Cogsworth'} description={'Professor Cogsworth is a master of clockwork engineering and a distinguished gentleman'} image={char2path} />
                <ReCharCard name={'Colonel Rustbottom'} description={'Colonel Rustbottom is a retired military strategist turned eccentric inventor'} image={char3path} />
                <ReCharCard name={'Captain Gearheart'} description={'Captain Gearheart is a charismatic and adventurous airship captain'} image={char4path} />
                <ReCharCard name={'Lady Clockwork'} description={'Lady Clockwork is a brilliant and enigmatic inventor with an eye for detail'} image={char1path} />
            </div>
		</div>
    )
}