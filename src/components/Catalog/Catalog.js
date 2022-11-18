import { useState, useEffect } from 'react';
import * as gameService from '../../services/gameService';
import SpinnerComponent from '../Spinner/Spinner';
import GameView from "./GameView";

const Catalog = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        gameService.getAll()
            .then(games => {
                setGames(games);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {isLoading ?
                <SpinnerComponent />
                : (games.length > 0
                    ? games.map(game => <GameView key={game._id} game={game} />)
                    : <h3 className="no-articles">No articles yet</h3>)
            }
        </section>
    );
}

export default Catalog;