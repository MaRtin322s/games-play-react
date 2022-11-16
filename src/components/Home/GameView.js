import { Link } from "react-router-dom";

const GameView = () => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src="./images/CoverFire.png" />
            </div>
            <h3>Cover Fire</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to="" className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
}

export default GameView;