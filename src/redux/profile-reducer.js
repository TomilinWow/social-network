import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST'
const SET_RELOADER = 'SET_RELOADER'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts: [
        {id: 1, text: 'Post'},
        {id: 1, text: 'Post'},
        {id: 1, text: 'Post'},
    ],
    profile: null,
    isReloaded: false,
    status: '123',
    newMessageBody: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 2, text: action.text}]
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


export const addNewPost = (text) =>
    ({type: ADD_NEW_POST, text})

export const setProfileData = (profile) =>
    ({type: SET_PROFILE_DATA, profile})

export const reloader = (isFetching) =>
    ({type: SET_RELOADER, isFetching})

export const setProfileStatus = (status) =>
    ({type: SET_PROFILE_STATUS, status})


export const getUsers = (userId) => {
    return (dispatch) => {

        dispatch(reloader(true))
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfileData(response.data))
            dispatch(reloader(false))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {

        profileAPI.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data))
        })

    }
}

export const setStatus = (status) => {
    return (dispatch) => {

        profileAPI.setStatus(status).then(response => {

            if (response.data.resultCode === 0){
                dispatch(setProfileStatus(status))
            }
        })

    }
}


export default profileReducer;