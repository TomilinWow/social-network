import {usersAPI} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
};

export type authStateType = typeof initialState
const authReducer = (state = initialState, action: any): authStateType => {

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

export type DataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
    data: DataType

}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth}})


export const login = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.login()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }

}
export const authlogin = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        let response = await usersAPI.authLogin(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(login())
        } else {

        }

    }
}
export const logout = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.login()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    }
}
export default authReducer;