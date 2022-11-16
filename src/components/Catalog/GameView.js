import { Link } from "react-router-dom";

const GameView = () => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src="./images/avatar-1.jpg" />
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <Link to="" className="details-button">Details</Link>
            </div>
        </div>
    );
}

export default GameView;