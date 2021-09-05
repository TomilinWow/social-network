import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_RELOADER = 'SET_RELOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pagesCount: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isReloaded: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageId}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case SET_RELOADER: {
            return {...state, isReloaded: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followPress = (userId) =>
    ({type: FOLLOW, userId})

export const unfollowPress = (userId) =>
    ({type: UNFOLLOW, userId})

export const setUsers = (users) =>
    ({type: SET_USERS, users})

export const setCurrentPage = (pageId) =>
    ({type: SET_CURRENT_PAGE, pageId})

export const setTotalUsersCount = (count) =>
    ({type: SET_TOTAL_USERS_COUNT, count})

export const reloader = (isFetching) =>
    ({type: SET_RELOADER, isFetching})


export const toggleFollowingProgress = (isFetching, userId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer;


export const requestUsers = (currentPage, pagesCount) => {
    return (dispatch) => {
        dispatch(reloader(true))
        usersAPI.setUsers(currentPage, pagesCount).then(data => {
            dispatch(reloader(false))
            dispatch(setUsers(data.items))

        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowPress(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followPress(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}