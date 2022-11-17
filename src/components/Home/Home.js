import { useState, useEffect } from 'react';
import * as gameService from '../../services/gameService';
import GameView from './GameView';

const Home = () => {
    const [lastGames, setLastGames] = useState([]);

    useEffect(() => {
        gameService.getLastGames()
            .then(games => setLastGames(games.slice(0, 3)));
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {lastGames.length > 0
                    ? lastGames.map(game => <GameView key={game._id} game={game} />)
                    : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    );
}

export default Home;