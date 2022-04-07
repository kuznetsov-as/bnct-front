import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "482c61a3-a92c-4711-81b3-fd539409dad6"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unfollow(id) {
      return instance.delete(`follow/${id}`).then(response => response.data)
    },

    follow(id) {
      return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id = 23160) {
        return  instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id = 23160) {
        return  instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatus(status) {
        return  instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
}

export const authAPI = {
    getMe() {
        return  instance.get(`auth/me`).then(response => response.data)
    },
    login(login, password, rememberMe = false) {
        return  instance.post(`auth/login`,
            {email: login, password: password, rememberMe: rememberMe}).then(response => response.data)
    },
    logout() {
        return  instance.delete(`auth/login`).then(response => response.data)
    }
}

