import {stopSubmit} from "redux-form"
const AUTH = "AUTH";

let initialState = {
    data: [
        {email: 'user', password: 'user', id: 1},
        {email: 'email', password: 'password', id: 2},
    ],
    isAuth: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            };
        }
        
        default:
            return state;
    }
}

export const authUser = (isAuth) => {
    return {
        type: AUTH,
        isAuth
    }
}

export const authThunk = (email, password) => {
    return async (dispatch) => {
        let temp = initialState.data.filter(d => d.email === email & d.password === password)
        if(temp.length > 0) {
            dispatch(authUser(true))
        } else if(email === null & password === null) {
            dispatch(authUser(false))
        } else {
            let message = 'Wrong data, try again'
            dispatch(stopSubmit('Login', {_error: message}))
        }
    }
}

export default appReducer;