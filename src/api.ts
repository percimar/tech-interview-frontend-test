import axios from 'axios';
import type { User, UserState } from './contexts/AuthContext';

const baseURL = "http://localhost:3001";

export type AuthParams = {username: string, password: string}
export const register = async ({username, password}: AuthParams) => {
    // Don't have access to bcrypt or crypto on the client side,
    // so I'm just sending the password in plain text, would never
    // do this in a production app
    const res = await axios.post(`${baseURL}/users`, {
        username: username,
        password: password,
        role: "User",
        registered_on: new Date().toISOString()
    });

    return res.status === 201;
} 

export const login = async ({username, password}: AuthParams): Promise<UserState> => {
    const res = await axios.get(`${baseURL}/users`, {
        params: {
            // Using regex search to avoid case sensitivity
            // Have to append ^ and $ to avoid partial matches
            // (e.g. "admi" would match "admin")
            username_like: `^${username}$`, 
            password
        }
    });

    if (res.data.length === 1) {
        const {password, ...user} = res.data[0]
        return user as User;
    } else {
        return undefined
    }
}

export const getUsers = async () => {
    const res = await axios.get(`${baseURL}/users`);
    const users = res.data.map(
        // Remove password field from user objects
        ({password, ...user}: User & {password: string}) => user
    )
    return users as User[];
}

export const deleteUser = async (username: string) => {
    const res = await axios.delete(`${baseURL}/users/${username}`);
    return res.status === 200;
}