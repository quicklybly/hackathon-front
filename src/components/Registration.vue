<template>
    <div
            class="container text-center craft-container"
            style=" display: flex;
                justify-content: center;">
        <div class="col-3"></div>
        <div class="col-6 form">
            <div
                    class="reg"
                    style="padding: 20px 30px 20px; margin: auto;">
                <div class="row">
                    <p>Зарегистрироваться в ФСП</p>
                    <p v-if="isError"
                       style="color: indianred">Ой! В одном из
                    полей ошибка.</p>
                </div>
                <div class="row">
                    <dnlkk-input
                        v-model="name"
                        placeholder="Имя*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                        v-model="surname"
                        placeholder="Фамилия*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                        v-model="patronymic"
                        placeholder="Отчество"/>
                </div>
                <div class="row">
                    <dnlkk-input
                        v-model="birthday"
                        type="date"
                        placeholder="Дата рождения*"
                        required/>
                </div>
                <div class="row">
                    <dnlkk-input
                    v-model="login"
                    placeholder="Логин*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                    v-model="password"
                    type="password"
                    placeholder="Пароль*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                    v-model="repeatPass"
                    type="password"
                    placeholder="Повторите пароль*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                    v-model="email"
                    placeholder="Почта*" required/>
                </div>
                <div class="row">
                    <dnlkk-input
                        v-model="passport"
                        placeholder="Паспорт*" required/>
                </div>
                <div class="row btn-row">
                    <button
                        @click="reg"
                        type="button"
                            class="btn btn-craft btn-lg btn-outline-danger">
                        Регистрирация
                    </button>
                </div>
                <div class="row row1">
                    <i class="btn-hover-link"
                       @click="onChangeRegistration"
                       style="cursor: pointer">Я
                        вспомнил, что уже зарегистрован!</i>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/baseUrl";

export default {
    name: "Registration",
    data(){
        return{
            login: '',
            password: '',
            repeatPass: '',
            email: '',
            name: '',
            surname: '',
            patronymic: '',
            birthday: '',
            passport: '',
            isError: false
        }
    },
    methods: {
        onChangeRegistration() {
            this.$emit('reg')
        },
        reg() {
            if (this.login.length > 0 &&
                this.password.length > 0 &&
                this.email.includes('@') &&
                this.password === this.repeatPass &&
                this.email.length > 0 &&
                this.name.length > 0 &&
                this.surname.length > 0 &&
                this.birthday.length > 0){
                    this.isError = false
                    this.postRegistration()
            } else {
                this.isError = true
            }
        },
        async postRegistration() {
            return await axios
                .post(`${BASE_URL}auth/sportsman/register`,
                    {username: this.login,
                        password: this.password,
                        email: this.email,
                        name: this.name,
                        surname: this.surname,
                        patronymic: this.patronymic,
                        birthday: this.birthday,
                        document: this.passport
                })
                .then(response => {

                    this.isError = false
                    this.$emit('login')
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