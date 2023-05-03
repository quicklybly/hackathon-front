<script>
import {defineComponent} from 'vue'
import Registration from "@/components/Registration.vue";
import {mapState} from "vuex";
import axios from "axios";
import {BASE_URL} from "@/baseUrl";
import Cookies from "js-cookie";

export default defineComponent({
    name: "UserEditor",
    components: {Registration},
    data() {
        return {
            repeatPass: '',
            password: '',
            isError: false
        }
    },
    computed: {
        ...mapState({
            name: state => state.self.name,
            surname: state => state.self.surname,
            patronymic: state => state.self.patronymic,
            login: state => state.self.username,
            birthday: state => state.self.birthday,
            passport: state => state.self.document,
            email: state => state.self.email
        })
    },
    methods: {
        reg() {
            if (this.login.length > 0 &&
                this.password.length > 0 &&
                this.email.includes('@') &&
                this.password === this.repeatPass &&
                this.email.length > 0 &&
                this.name.length > 0 &&
                this.surname.length > 0 &&
                this.birthday.length > 0) {
                this.isError = false
                this.change()
            } else {
                this.isError = true
            }
        },
        async change() {
            return await axios
                .put(`${BASE_URL}users/profile/sportsman`,
                    {
                        username: this.login,
                        password: this.password,
                        email: this.email,
                        name: this.name,
                        surname: this.surname,
                        patronymic: this.patronymic,
                        birthday: this.birthday,
                        document: this.passport
                    }, {
                        headers: {
                            'Authorization':
                                'Bearer ' +
                                Cookies.get('jwt')
                        }
                    })
                .then(response => {

                    this.isError = false
                    this.$emit('login')
                    this.$emit('close')
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    this.isError = true
                    return null
                });
        }
    }
})
</script>

<template>
    <div> Изменяйте данные и своим любимым!</div>
    <br>
    <p v-if="isError"
       style="color: indianred">Ой! В одном из
        полей ошибка.</p>

    <h5>Фио:</h5>
    <div class="row-cols-auto">
        <dnlkk-input
                v-model="name"
                placeholder="Имя*" required/>
    </div>
    <div class="row-cols-auto">
        <dnlkk-input
                v-model="surname"
                placeholder="Фамилия*" required/>
    </div>
    <div class="row-cols-auto">
        <dnlkk-input
                v-model="patronymic"
                placeholder="Отчество"/>
    </div>
    <div class="row-cols-auto">
        <h5>День рождения:</h5>
        <dnlkk-input
                v-model="birthday"
                type="date"
                placeholder="Дата рождения*"
                required/>
    </div>
    <div class="row-cols-auto">
        <h5>Логин:</h5>
        <dnlkk-input
                v-model="login"
                placeholder="Логин*" required/>
    </div>
    <div class="row-cols-auto">
        <h5>Пароль:</h5>
        <dnlkk-input
                v-model="password"
                type="password"
                placeholder="Пароль*" required/>
    </div>
    <div class="row-cols-auto">
        <dnlkk-input
                v-model="repeatPass"
                type="password"
                placeholder="Повторите пароль*" required/>
    </div>
    <div class="row-cols-auto">
        <h5>Почта:</h5>
        <dnlkk-input
                v-model="email"
                placeholder="Почта*" required/>
    </div>
    <div class="row-cols-auto">
        <h5>Паспорт:</h5>
        <dnlkk-input
                v-model="passport"
                placeholder="Паспорт*" required/>
    </div>
    <br>
    <dnlkk-button @click="reg">жмак</dnlkk-button>
</template>

<style scoped>
.row-cols-auto {
    margin: 2px 0;
}

</style>