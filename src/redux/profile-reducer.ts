import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST'
const SET_RELOADER = 'SET_RELOADER'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

type PostsType = {
    id: number,
    text: string
}

let initialState = {
    posts: [] as Array<PostsType>,
    profile: null as any,
    isReloaded: false,
    status: '',
    newMessageBody: ''

};

type ProfileStateType = typeof initialState

const profileReducer = (state = initialState, action: any): ProfileStateType => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 2, text: action.text} as PostsType]
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile
            }
        case SET_RELOADER:
            return {
                ...state,
                isReloaded: action.isFetching
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

type addNewPostType = {
    type: typeof ADD_NEW_POST,
    text: string
}

export const addNewPost = (text: string): addNewPostType =>
    ({type: ADD_NEW_POST, text})

type setProfileDataType = {
    type: typeof SET_PROFILE_DATA,
    profile: any
}
export const setProfileData = (profile: any): setProfileDataType =>
    ({type: SET_PROFILE_DATA, profile})

type reloaderType = {
    type: typeof SET_RELOADER,
    isFetching: boolean
}


export const reloader = (isFetching: boolean): reloaderType =>
    ({type: SET_RELOADER, isFetching})

type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}

export const setProfileStatus = (status: string): setProfileStatusType =>
    ({type: SET_PROFILE_STATUS, status})


export const getUsers = (userId: number) => {
    return async (dispatch: any) => {

        dispatch(reloader(true))
        let response = await profileAPI.getProfile(userId)
        dispatch(setProfileData(response.data))
        dispatch(reloader(false))
    }

}

export const getStatus = (userId: number) => {
    return async (dispatch: any) => {

        let response = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(response.data))
    }
}

export const setStatus = (status: string) => {
    return async (dispatch: any) => {

        let response = await profileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }

    }
}


export default profileReducer;