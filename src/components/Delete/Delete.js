import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import * as gameService from '../../services/gameService';


const Delete = () => {
    const { gameId } = useParams();
    const { auth } = useContext(GameContext);
    const navigate = useNavigate();

    gameService.deleteGame(gameId, auth.accessToken)
        .then(() => {
            navigate('/', { replace: true });
        });

}

export default Delete;