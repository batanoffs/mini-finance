import * as request from './requester'
const baseURL = "https://lavishpart.backendless.app/api";
const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
}

const login = async (loginData) => {
    return await request.post(`${baseURL}${endpoints.login}`, loginData)
}

const logout = async (token) => {
    await request.get(`${baseURL}${endpoints.logout}`, token)
}

const register = async (registerData) => {
    return await request.post(`${baseURL}${endpoints.register}`, registerData)
}

export const authService = {
    login,
    register,
    logout,
}