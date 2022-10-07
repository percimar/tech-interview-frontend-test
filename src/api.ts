import axios from 'axios';

const baseURL = "http://localhost:3001";

type AuthParams = {username: string, password: string}
export const register = async ({username, password}: AuthParams) => {
    // Don't have access to bcrypt or crypto on the client side,
    // so I'm just sending the password in plain text, would never
    // do this in a production app
    const res = await axios.post(`${baseURL}/users`, {
        username: username,
        password: password
    });

    return res.status === 201;
} 

export const login = async ({username, password}: AuthParams) => {
    const res = await axios.get(`${baseURL}/users`, {
        params: {username, password}
    });

    if (res.data.length === 1) {
        return res.data[0]
    } else {
        return undefined
    }
}