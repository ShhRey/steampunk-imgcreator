import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navHeader" style={{display: "flex", justifyContent: "space-around"}}>
            <div className="navLeftLogo"><img src="" alt="SSD" /></div>
            <div className="navCtrMenu" style={{display: "flex", justifyContent: "justify-center"}}>
                <Link to="/">HOME</Link>
                <Link to="/create-img">IMG</Link>
                <Link to="/play-game">GAME</Link>
            </div>
            <div className="navRightBtns">
                <button>GENERATE IMG</button>
                <button>PLAY GAME</button>
            </div>
        </div>
    )
}