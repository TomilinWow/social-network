import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4cdeaa98-5bdc-42c2-bbbf-5b75717f063b'
    }

})

export const usersAPI = {

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
    },
    authLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.post(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },

    setStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    }
}

export const authAPI = {
    login(data){
        return instance.post(`auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: true
        })
    }
}