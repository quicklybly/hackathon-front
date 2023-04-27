<template>
    <div
            v-if="!isRecovery && !isRegistration"
            class="auth">
        <h2>Вход в аккаунт</h2>
        <dnlkk-input
                placeholder="Ваш логин"/>
        <dnlkk-input
                type="password"
                placeholder="Ваш пароль"/>
        <i @click="onChangeRecovery" style="cursor: pointer">Забыли
            пароль?</i>
        <i @click="onChangeRegistration" style="cursor:
        pointer">Ещё не зарегистрированы?</i>
    </div>
    <div
            v-if="isRecovery"
            class="recovery">
        <h2>Восстановление пароля</h2>
        <dnlkk-input
                placeholder="Ваша почта/логин"/>
        <i @click="onChangeRecovery" style="cursor: pointer">Я
            вспомнил пароль</i>
        <i @click="onChangeRegistration" style="cursor:
        pointer">Я вспомнил что ещё не зарегистрирован!</i>
    </div>
    <div
        v-if="isRegistration"
        class="reg">
        <dnlkk-input
            placeholder="Логин"/>
        <dnlkk-input
            type="password"
            placeholder="Пароль"/>
        <dnlkk-input
            type="password"
            placeholder="Повторите пароль"/>
        <dnlkk-input
            placeholder="Почта"/>
        <dnlkk-input
            placeholder="Имя"/>
        <dnlkk-input
            placeholder="Фамилия"/>
        <dnlkk-input
            placeholder="Отчество"/>
        <dnlkk-input
            type="date"
            placeholder="Дата рождения"/>
        <i @click="onChangeRegistration" style="cursor: pointer">Я
            вспомнил, что уже зарегистрован!</i>

    </div>
</template>

<script>

export default {
    name: "SignInPage",
    data() {
        return {
            isRecovery: false,
            isRegistration: false
        }
    },
    methods: {
        onChangeRecovery() {
            this.isRecovery = !this.isRecovery;
            this.isRegistration = false
        },
        onChangeRegistration() {
            this.isRegistration = !this.isRegistration;
            this.isRecovery = false
        }
    }
}
</script>

<style scoped>
</style>