const baseUrl = 'http://localhost:3030/data';

export const getAll = () => fetch(`${baseUrl}/games`).then(res => res.json());
export const getOne = (gameId) => fetch(`${baseUrl}/games/${gameId}`).then(res => res.json());
export const getLastGames = () =>
    fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`).then(res => res.json());

export const createGame = (accessToken, gameData) => {
    return fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(gameData)
    })
        .then(res => res.json());
}