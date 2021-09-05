import {createSelector} from "reselect";


export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})


export const getPageCount = (state) => {
    return state.usersPage.pagesCount
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}


export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}


export const getIsReloaded = (state) => {
    return state.usersPage.isReloaded
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}