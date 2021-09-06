import {usersAPI} from "../api/api";
import {UserType} from "../types/types";
import {updateObjectInArray} from "../tools/helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_RELOADER = 'SET_RELOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pagesCount: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isReloaded: false,
    followingInProgress: [] as Array<number>
};
export type UsersStateType = typeof initialState
const usersReducer = (state = initialState, action: any): UsersStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
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
type FollowPressType = {
    type: typeof FOLLOW
    userId: number
}
export const followPress = (userId: number): FollowPressType =>
    ({type: FOLLOW, userId})

type UnfollowPressType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowPress = (userId: number): UnfollowPressType =>
    ({type: UNFOLLOW, userId})

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType =>
    ({type: SET_USERS, users})

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    pageId: number
}
export const setCurrentPage = (pageId: number): SetCurrentPageType =>
    ({type: SET_CURRENT_PAGE, pageId})

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountType =>
    ({type: SET_TOTAL_USERS_COUNT, count})

type ReloaderType = {
    type: typeof SET_RELOADER
    isFetching: boolean
}
export const reloader = (isFetching: boolean): ReloaderType =>
    ({type: SET_RELOADER, isFetching})

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer;


export const requestUsers = (currentPage: number, pagesCount: number) => {
    return async (dispatch: any) => {
        dispatch(reloader(true))
        let data = await usersAPI.setUsers(currentPage, pagesCount)
        dispatch(reloader(false))
        dispatch(setUsers(data.items))

    }
}

const followUnfollowFlow = async (userId: number, dispatch: any, apiMethod: any, followUnfollowPress: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(followUnfollowPress(userId))
        dispatch(toggleFollowingProgress(false, userId))
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowPress)
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followPress)
    }
}