import {createStore} from 'vuex'
import axios from "axios";
import {BASE_URL} from "@/baseUrl";

export default createStore({
    state: {
        isAuth: false,
        self: {
            username: '',
            email: '',
            name: '',
            surname: '',
            patronymic: '',
            birthday: '',
            document: ''
        }
    },
    getters: {},
    mutations: {
        auth(state) {
            state.isAuth = true;

            // Authorization: Bearer jwt
        },
        unAuth(state) {
            state.self = {
                username: '',
                email: '',
                name: '',
                surname: '',
                patronymic: '',
                birthday: '',
                document: ''
            };

            axios.get(`${BASE_URL}auth/logout`)
                .then(response => {
                    context.state.self = response.data
                    context.state.isAuth = true;
                    // context.commit('setLogin', login)
                })
                .catch(error => {
                    return Promise.reject(error)
                })

            state.isAuth = false
        }
    },
    actions: {
        login(context, credentials) {
            console.log(credentials)
            console.log(context)
            return axios.get(`${BASE_URL}users/profile`, credentials)
                .then(response => {
                    context.state.self = response.data
                    context.state.isAuth = true;
                    // context.commit('setLogin', login)
                })
                .catch(error => {
                    return Promise.reject(error)
                })
        }
    },
    modules: {}
})
