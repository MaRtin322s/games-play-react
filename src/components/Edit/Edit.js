import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import * as gameService from '../../services/gameService';

const Edit = () => {
    const { gameId } = useParams();
    const [currentGame, setCurrentGame] = useState({});
    const { auth } = useContext(GameContext);
    const navigate = useNavigate();

    const editHandler = (ev) => {
        ev.preventDefault();

        const values = Object.fromEntries(new FormData(ev.target));

        if (Object.values(values).some(x => x == '')) {
            alert('All strings are required!');
        } else {
            gameService.editGame(gameId, values, auth.accessToken)
                .then(() => navigate(`/details/${gameId}`));
        }
    }

    useEffect(() => {
        gameService.getOne(gameId)
            .then(game => setCurrentGame(game));
    }, [])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={(ev) => editHandler(ev)}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={currentGame.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={currentGame.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={currentGame.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={currentGame.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        defaultValue={currentGame.summary}
                    />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    );
}

export default Edit;