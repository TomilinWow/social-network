import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state
    }

}

export const setAuthUserData = (id, email, login, isAuth) =>
    ({type: SET_USER_DATA , data: {id, email, login, isAuth}})


export const login = () => {
    return (dispatch) => {
        usersAPI.login().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

        })
    }
}
export const authlogin = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.authLogin(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(login())
            } else {

            }

        })
    }
}
export const logout = () => {
    return (dispatch) => {
        usersAPI.login().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        })
    }
}
export default authReducer;