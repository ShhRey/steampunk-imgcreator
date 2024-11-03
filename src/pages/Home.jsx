import Navbar from '../components/Navbar.jsx';
import '../styles/Home.css';
// import arenaVideo from '../assets/videos/arena.mp4';
import ReCharCard from '../components/ReCharCard.jsx';
import char1path from '../assets/images/char1.png';
import char2path from '../assets/images/char2.png';
import char3path from '../assets/images/char3.png';
import char4path from '../assets/images/char4.png';
import char5path from '../assets/images/char5.png';

export default function Home() {
	
    return (
        <div id='home' className="flex flex-col">
            <div id='heroContent' className="flex flex-row">
                <div id='heroLeftCont' className='flex flex-col'>
                    <div id='descTextCont' className='flex flex-col'>
                        <h2>Some Tagline for Project</h2>
                        <h3>Some Description about this Project</h3>
                    </div>
                </div>
            </div>
            
            <div className='horScrollContainer'>
                <ReCharCard name={'Gadgeteer Garvin'} description={'Gadgeteer Garvin is an eccentric inventor and skilled engineer'} image={char1path} />
                <ReCharCard name={'Professor Cogsworth'} description={'Professor Cogsworth is a master of clockwork engineering and a distinguished gentleman'} image={char2path} />
                <ReCharCard name={'Colonel Rustbottom'} description={'Colonel Rustbottom is a retired military strategist turned eccentric inventor'} image={char3path} />
                <ReCharCard name={'Captain Gearheart'} description={'Captain Gearheart is a charismatic and adventurous airship captain'} image={char4path} />
                <ReCharCard name={'Lady Clockwork'} description={'Lady Clockwork is a brilliant and enigmatic inventor with an eye for detail'} image={char5path} />
            </div>
		</div>
    )
}