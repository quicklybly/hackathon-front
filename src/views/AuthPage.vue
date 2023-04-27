<template xmlns="http://www.w3.org/1999/html">
  <div class="content">
  <div v-if="!isRecovery && !isRegistration">
    <div class ="container text-center craft-container" style="display: flex;
                    flex-direction: row;
                    align-self: center;
                    justify-content: center;">
      <div class="col-lg-2"></div>
      <div class="col-lg-6" style = "border: solid 2px #EC1D35; border-radius: 5px; padding: 20px 30px 20px; margin: auto;" >
        <div class="row">
          <div v-if="!isRecovery && !isRegistration"
                  class="auth">
              <p class="title">Вход в аккаунт</p>
          </div>
        </div>
        <div class="row">
          <dnlkk-input placeholder="Ваш логин"/>
        </div>
        <div class="row">
          <dnlkk-input
                  type="password"
                  placeholder="Ваш пароль"/>
        </div>
        <div class = "row">
          <i @click="onChangeRecovery" style="cursor: pointer">Забыли
              пароль?</i>
          <i @click="onChangeRegistration" style="cursor:
        pointer">Зарегистрироваться</i>
        </div>
      </div>
      <div class = "col-lg-2"></div>
    </div>
  </div>
    <div
            v-if="isRecovery"
            class="recovery container text-center craft-container"
            >
      <div class="col-2"></div>
      <div class="col-8" style = "border: solid 2px #EC1D35; border-radius: 5px; padding: 20px 30px 20px; margin: auto;">
      <div class="row">
        <p>Восстановление пароля</p>
      </div>
      <div class="row">
        <dnlkk-input
                placeholder="Ваша почта/логин"/>
      </div>
      <div class="row">
        <i @click="onChangeRecovery" style="cursor: pointer">Я
            вспомнил пароль</i>
        <i @click="onChangeRegistration" style="cursor:
        pointer">Я вспомнил что ещё не зарегистрирован!</i>
      </div>
      </div>
      <div class="col-2"></div>
    </div>
  <div v-if="isRegistration"
       class="container text-center craft-container"
       style=" display: flex;
                justify-content: center;">
    <div class="col-3"></div>
    <div class="col-6" style = "border: solid 2px #EC1D35; border-radius: 5px;">
      <div
          class="reg" style = "padding: 20px 30px 20px; margin: auto;">
        <div class="row">
          <p>Регистрация</p>
        </div>
        <div class="row">
          <dnlkk-input
              placeholder="Логин"/>
        </div>
        <div class="row">
          <dnlkk-input
              type="password"
              placeholder="Пароль"/>
        </div>
        <div class="row">
          <dnlkk-input
              type="password"
              placeholder="Повторите пароль"/>
        </div>
        <div class="row">
          <dnlkk-input
              placeholder="Почта"/>
        </div>
        <div class="row">
          <dnlkk-input
              placeholder="Имя"/>
        </div>
        <div class="row">
          <dnlkk-input
              placeholder="Фамилия"/>
        </div>
        <div class="row">
          <dnlkk-input
              placeholder="Отчество"/>
        </div>
        <div class="row">
          <dnlkk-input
              type="date"
              placeholder="Дата рождения"/>
        </div>
        <div class="row row1">
          <i @click="onChangeRegistration" style="cursor: pointer">Я
              вспомнил, что уже зарегистрован!</i>
        </div>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
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
.content {
  background-color: #1B1C21;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
i, P {
  color: #EDEDED;
  font-weight: 500;
}
.row1 {
  padding-top: 10px;
}
.craft-container {
  margin-top: 5%;
}

</style>