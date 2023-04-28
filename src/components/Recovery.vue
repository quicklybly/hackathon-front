<template>
    <div class="recovery container text-center craft-container">
        <div class="col-2"></div>
        <div class="col-8 form">
            <div class="row">
                <p>Восстановление пароля</p>
            </div>
            <div class="row">
                <dnlkk-input
                        placeholder="Ваша почта/логин"/>
            </div>
            <div class="row btn-row">
                <button type="button" class="btn btn-craft btn-lg btn-outline-danger">Восстановить</button>
            </div>
            <div class="row">
                <i class="btn-hover-link"
                   @click="onChangeRecovery" style="cursor: pointer">Я
                    вспомнил пароль</i>
                <i class="btn-hover-link"
                   @click="onChangeRegistration" style="cursor:
            pointer">Я вспомнил что ещё не зарегистрирован!</i>
            </div>
        </div>
        <div class="col-2"></div>
    </div>
</template>

<script>
export default {
    name: "recovery",
    methods: {
        onChangeRecovery(){
            this.$emit('recovery')
        },
        onChangeRegistration() {
            this.$emit('reg')

        }
    }
}
</script>

<style>

</style>