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

                <div id="heroLeftCont" className="flex flex-col justify-center items-center w-full md:w-1/2 h-screen bg-gray-900">
                    <div id="descTextCont" className="text-center text-white z-10 p-6">
                        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Welcome to the World of SteamPunk</h1>
                        <h2 className="text-2xl font-semibold">Harnessing Steam, Crafting Innovation</h2>
                        <h3 className="text-lg mt-4 mb-6">
                            Our project merges the timeless aesthetics of the Victorian era with modern technology to create a unique, functional steampunk experience.
                        </h3>

                        <ul className="text-left mx-auto list-disc list-inside text-lg space-y-2">
                            <li><span className="font-bold text-yellow-400">19th-Century Elegance</span> meets futuristic technology – Victorian style with a twist!</li>
                            <li>A world powered by <span className="font-bold text-yellow-400">steam</span> and <span className="font-bold text-yellow-400">gears</span>, where <span className="font-bold text-yellow-400">mechanical marvels</span> and <span className="font-bold text-yellow-400">clockwork inventions</span> come to life.</li>
                            <li><span className="font-bold text-yellow-400">Airships</span>, <span className="font-bold text-yellow-400">adventurers</span>, and <span className="font-bold text-yellow-400">inventors</span> push the limits of <span className="font-bold text-yellow-400">imagination</span> and <span className="font-bold text-yellow-400">innovation</span>.</li>
                            <li><span className="font-bold text-yellow-400">Explore</span> the steampunk universe – a <span className="font-bold text-yellow-400">fusion of history and fantasy</span> with endless possibilities.</li>
                            <li>Join us in a world where <span className="font-bold text-yellow-400">curiosity drives discovery</span> and the spirit of <span className="font-bold text-yellow-400">exploration</span> is alive!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="slider" className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
                <div id="horScrollContainer" className="inline-flex justify-center space-x-4 w-full">
                    <ReCharCard name={'Gadgeteer Garvin'} description={'Gadgeteer Garvin is an eccentric inventor and skilled engineer.'} image={char1path} />
                    <ReCharCard name={'Professor Cogsworth'} description={'Professor Cogsworth is a master of clockwork engineering and a distinguished gentleman.'} image={char2path} />
                    <ReCharCard name={'Colonel Rustbottom'} description={'Colonel Rustbottom is a retired military strategist turned eccentric inventor.'} image={char3path} />
                    <ReCharCard name={'Captain Gearheart'} description={'Captain Gearheart is a charismatic and adventurous airship captain.'} image={char4path} />
                    <ReCharCard name={'Lady Clockwork'} description={'Lady Clockwork is a brilliant and enigmatic inventor with an eye for detail.'} image={char5path} />
                    <ReCharCard name={'Gadgeteer Garvin'} description={'Gadgeteer Garvin is an eccentric inventor and skilled engineer.'} image={char1path} />
                    <ReCharCard name={'Professor Cogsworth'} description={'Professor Cogsworth is a master of clockwork engineering and a distinguished gentleman.'} image={char2path} />
                    <ReCharCard name={'Colonel Rustbottom'} description={'Colonel Rustbottom is a retired military strategist turned eccentric inventor.'} image={char3path} />
                    <ReCharCard name={'Captain Gearheart'} description={'Captain Gearheart is a charismatic and adventurous airship captain.'} image={char4path} />
                    <ReCharCard name={'Lady Clockwork'} description={'Lady Clockwork is a brilliant and enigmatic inventor with an eye for detail.'} image={char5path} />
                </div>
            </div>

            <div id="facCardContainer" className='flex flex-row my-10 justify-evenly'>
                <BotCard />
                <GameCard />
            </div>

            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}