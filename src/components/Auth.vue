<template>
    <div class="container text-center craft-container"
         style="display: flex;
                    flex-direction: row;
                    align-self: center;
                    justify-content: center;">
        <div class="col-lg-2"></div>
        <div class="col-lg-6 form">
            <div class="row">
                <div
                        class="auth">
                    <p class="title">Вход в аккаунт</p>
                    <p class="title"
                       style="color: indianred"
                       v-if="isError">Ошибка в логине
                        или пароле</p>
                </div>
            </div>
            <div class="row">
                <dnlkk-input v-model="login"
                             placeholder="Ваш логин"/>
            </div>
            <div class="row">
                <dnlkk-input
                        v-model="password"
                        type="password"
                        placeholder="Ваш пароль"/>
            </div>
            <div class="row btn-row">
                <dnlkk-button type="button"
                              class="btn btn-craft btn-lg btn-outline-danger"
                              @click="onAuth(login, password)">
                    Войти
                </dnlkk-button>
            </div>
            <div class="row">
                <!--                <i class="btn-hover-link"-->
                <!--                   @click="onChangeRecovery"-->
                <!--                   style="cursor: pointer">-->
                <!--                    Забыли-->
                <!--                    пароль?</i>-->
                <i class="btn-hover-link"
                   @click="onChangeRegistration" style="cursor:
        pointer">Зарегистрироваться</i>
            </div>
        </div>
        <div class="col-lg-2"></div>
    </div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/baseUrl";
import Cookies from 'js-cookie';

export default {
    name: "Auth",
    data() {
        return {
            login: '',
            password: '',
            isError: false
        }
    },
    methods: {
        onChangeRecovery() {
            this.$emit('recovery')
        },
        onChangeRegistration() {
            this.$emit('reg')

        },
        onAuth() {
            this.fetchJWT(this.login, this.password);
        },
        goOn() {
            this.$store.dispatch('login', {
                headers: {
                    'Authorization':
                        'Bearer ' +
                        Cookies.get('jwt')
                }
            })
                .then(() =>
                    this.$router.push('/lk'))
                .catch(error => {
                    console.error(error)
                })
        },
        fetchJWT(login, pass) {
            return axios
                .post(`${BASE_URL}auth/login`, {
                    username:
                    login, password: pass
                })
                .then(response => {
                    Cookies.set('jwt', `${response.data.jwt}`, {
                        expires: 7,
                        path: ''
                    });
                    this.isError = false
                    this.goOn()
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    this.isError = true
                    return null
                });
        }
    }
}
</script>

<style>

</style>