const baseUrl = 'http://localhost:3030/users';

export const loginUser = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken
        }
    });
}