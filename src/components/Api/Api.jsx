import * as axios from 'axios'

let instance = axios.create({
baseURL:'https://social-network.samuraijs.com/api/1.0/',
headers: {"API-KEY": "7149364e-f75b-4f64-8304-e150274b89f4"},
withCredentials: true

})

export const Api = {
    getUsers (page =1, size = 10) {
        return instance.get(`users?page=${page}&count=${size}`)
    },
    usersFollowPost (id){
        return instance.post(`follow/${id}`)
    },
    usersFollowDelete (id){
        return instance.delete(`follow/${id}`)
    },
    Profile (id) {
        return instance.get(`profile/${id}`)
    },
    Header (){
        return instance.get(`auth/me`)
    },
    UsersApi () {
        return instance.get(`users`)
    },
   GetStatus (id) {
        return instance.get(`profile/status/${id}`)
    },
    PostStatus (status){
        return instance.put(`profile/status`, {status})
    },
    Login (email, password, rememberMe = false)
    {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    LogOut () {
        return instance.delete(`auth/login`)
    }
}
