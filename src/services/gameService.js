const baseUrl = 'https://games-play-api.herokuapp.com/data';

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

export const editGame = (gameId, userData, accessToken) => {
    return fetch(`${baseUrl}/games/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}

export const deleteGame = (gameId, accessToken) => {
    return fetch(`${baseUrl}/games/${gameId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
        }
    })
        .then(res => res.json());
}

export const getAllComments = (gameId) => 
    fetch(`${baseUrl}/comments?where=gameId%3D%22${gameId}%22`).then(res => res.json());

export const createComment = (comment, accessToken) => {
    return fetch(`${baseUrl}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json());
}