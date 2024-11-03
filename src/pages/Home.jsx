import '../styles/Home.css';
import arenaVideo from '../assets/videos/arena.mp4';
import ReCharCard from '../components/ReCharCard.jsx';
import char1path from '../assets/images/char1.png';
import char2path from '../assets/images/char2.png';
import char3path from '../assets/images/char3.png';
import char4path from '../assets/images/char4.png';
import char5path from '../assets/images/char5.png';
import BotCard from '../components/BotCard.jsx';
import GameCard from '../components/GameCard.jsx';
import { Footer } from '../components/Footer.jsx';

export default function Home() {

    return (
        <div id='home' className="flex flex-col">
            <div id='heroContent' className="flex flex-row relative w-full h-screen">
                <video className='absolute top-0 left-0 w-full h-screen object-cover opacity-80' src={arenaVideo} autoPlay loop muted />

                <div id='heroLeftCont' className='flex flex-col justify-center items-center w-1/2 h-screen'>
                    <div id='descTextCont' className='text-center text-white z-10'>
                        <h2 className='text-2xl'>Harnessing Steam, Crafting Innovation</h2>
                        <h3 className='text-xl mt-4'>Our project merges the timeless aesthetics of the Victorian era with modern technology to create a unique, functional steampunk device.</h3>
                    </div>
                </div>
            </div>

            <div id="slider" className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth">
                <div id="horScrollContainer" className="inline-flex space-x-4">
                    <ReCharCard name={'Gadgeteer Garvin'} description={'Gadgeteer Garvin is an eccentric inventor and skilled engineer.'} image={char1path} />
                    <ReCharCard name={'Professor Cogsworth'} description={'Professor Cogsworth is a master of clockwork engineering and a distinguished gentleman.'} image={char2path} />
                    <ReCharCard name={'Colonel Rustbottom'} description={'Colonel Rustbottom is a retired military strategist turned eccentric inventor.'} image={char3path} />
                    <ReCharCard name={'Captain Gearheart'} description={'Captain Gearheart is a charismatic and adventurous airship captain.'} image={char4path} />
                    <ReCharCard name={'Lady Clockwork'} description={'Lady Clockwork is a brilliant and enigmatic inventor with an eye for detail.'} image={char5path} />
                </div>
            </div>

            <div id="facCardContainer" className='flex flex-row my-20 justify-evenly'>
                <BotCard />
                <GameCard />
            </div>

            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}