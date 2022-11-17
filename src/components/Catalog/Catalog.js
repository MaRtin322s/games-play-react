import { useState, useEffect } from 'react';
import * as gameService from '../../services/gameService';
import GameView from "./GameView";

const Catalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(games => setGames(games));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <GameView key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}

export default Catalog;