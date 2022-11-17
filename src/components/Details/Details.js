import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import * as gameService from '../../services/gameService';

const Details = () => {
    const { gameId } = useParams();
    const [currentGame, setCurrentGame] = useState({});
    const { auth } = useContext(GameContext);
    useEffect(() => {
        gameService.getOne(gameId)
            .then(game => setCurrentGame(game));
    }, []);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">{currentGame.summary}</p>

                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        {/* <li className="comment">
                            <p></p>
                        </li> */}
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                {currentGame._ownerId === auth._id
                    ? <div className="buttons">
                        <Link to={`/details/${currentGame._id}/edit`} className="button">
                            Edit
                        </Link>
                        <Link to={`/details/${currentGame._id}/delete`} className="button">
                            Delete
                        </Link>
                    </div>
                    : null
                }
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        defaultValue={""}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}

export default Details;