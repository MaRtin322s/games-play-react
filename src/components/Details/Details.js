import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import Comment from './Comment';
import * as gameService from '../../services/gameService';

const Details = () => {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const { auth } = useContext(GameContext);
    const [currentGame, setCurrentGame] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        email: '',
        comment: ''
    });
    useEffect(() => {
        gameService.getOne(gameId)
            .then(game => setCurrentGame(game));
    }, []);

    useEffect(() => {
        gameService.getAllComments(gameId)
            .then(comments => setComments(comments));
    }, [newComment])

    const commentHandler = (ev) => {
        ev.preventDefault();

        gameService.createComment(newComment, auth.accessToken)
            .then(() => {
                setNewComment({ comment: '' });
                navigate(`/details/${gameId}`, { replace: true });
            });
    }

    const changeHandler = (ev) => {
        setNewComment(() => ({
            gameId,
            comment: ev.target.value,
            email: auth.email,
        }));
    }

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

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.length > 0
                            ? comments.map(comment => <Comment key={comment._id} comment={comment} />)
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>
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

            {currentGame._ownerId !== auth._id && auth.accessToken
                ? <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={(ev) => commentHandler(ev)}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={newComment.comment}
                            onChange={(ev) => changeHandler(ev)}
                        />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Add Comment"
                        />
                    </form>
                </article>
                : null
            }
        </section>
    );
}

export default Details;