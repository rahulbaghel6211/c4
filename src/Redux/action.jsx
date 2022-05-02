
// action types

export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";


// Action Creators


export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}


export const logout = (data) => {
    return {
        type: LOGOUT,
        payload: data
    }
}