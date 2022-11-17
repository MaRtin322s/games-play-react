const baseUrl = 'http://localhost:3030/data';

export const getAll = () => fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`).then(res => res.json());
export const getOne = (gameId) => fetch(`${baseUrl}/games/${gameId}`).then(res => res.json());