import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GameView from "./GameView";

const Catalog = () => {
    const { games } = useContext(GameContext);

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