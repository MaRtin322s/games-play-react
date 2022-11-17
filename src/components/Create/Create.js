import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GameContext } from "../../context/GameContext";
import * as gameService from '../../services/gameService';

const Create = () => {
    const { auth } = useContext(GameContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const createHandler = (ev) => {
        ev.preventDefault();

        gameService.createGame(auth.accessToken, values)
            .then(() => navigate('/'));
    }

    const changeHandler = (ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={(ev) => createHandler(ev)}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} onChange={(ev) => changeHandler(ev)} />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}

export default Create;