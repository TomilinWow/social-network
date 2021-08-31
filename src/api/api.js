import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4cdeaa98-5bdc-42c2-bbbf-5b75717f063b'
    }

})

export const usersAPI = {
    getUsers(userId) {
        return instance.get(`profile/` + userId).then(
            response => {
                return response.data
            }
        )
    },

    setUsers(currentPage, pagesCount) {
        return instance.get(`users?page=${currentPage}&count=${pagesCount}`).then(
            response => {
                return response.data
            }
        )
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    login() {
        return instance.get(`auth/me`)
    }
}
