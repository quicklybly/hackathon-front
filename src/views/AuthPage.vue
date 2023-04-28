<template xmlns="http://www.w3.org/1999/html">
  <div class="content">
  <div v-if="!isRecovery && !isRegistration">
    <div class ="container text-center craft-container" style="display: flex;
                    flex-direction: row;
                    align-self: center;
                    justify-content: center;">
      <div class="col-lg-2"></div>
      <div class="col-lg-6 form" >
        <div class="row">
          <div
                  class="auth">
              <p class="title">Вход в аккаунт</p>
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
          @click="onAuth(login, password)">Войти</dnlkk-button>
        </div>
        <div class = "row">
          <i class="btn-hover-link"
             @click="onChangeRecovery"
             style="cursor: pointer">
              Забыли
              пароль?</i>
          <i class="btn-hover-link" 
             @click="onChangeRegistration" style="cursor:
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
  <div v-if="isRegistration"
       class="container text-center craft-container"
       style=" display: flex;
                justify-content: center;">
    <div class="col-3"></div>
    <div class="col-6 form">
      <div
          class="reg" style = "padding: 20px 30px 20px; margin: auto;">
        <div class="row">
          <p>Зарегистрироваться в ФСП</p>
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
        <div class="row btn-row">
          <button type="button" class="btn btn-craft btn-lg btn-outline-danger">Регистрирация</button>
        </div>
        <div class="row row1">
          <i class="btn-hover-link"
             @click="onChangeRegistration" style="cursor: pointer">Я
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
            isRegistration: false,
            isAuth: false,
            login: '',
            password: ''
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
        },
        onAuth() {
            if (this.login === 'login' && this.password
                === 'login') {
                this.$store.commit('login', this.login)
                this.$router.push('/lk')
            }
        }
    }
}
</script>

<style scoped>
.content {
  background-image: url("/src/components/img/auth-background.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: #1B1C21;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
P {
  color: #EDEDED;
  font-weight: 600;
  font-size: 20px;
}
i {
  color: #EDEDED;
  font-weight: 600;
  font-size: 15px;
}

.btn-craft{
  color: #EDEDED;
  font-size: 18px;
  font-weight: 500;
}

.btn-row {
  width: 40%;
  padding: 10px;
  margin: auto;
}

.row1 {
  padding-top: 10px;
}
.craft-container {
  margin-top: 5%;
}

.form{
  backdrop-filter: blur(8px);border: solid 2px
	#EC1D35;
	border-radius: 5px; padding: 20px 30px 20px; margin: auto;
}


.btn-hover-link {
	position: relative;
    display: inline-block;
      /* устанавливаем блочный тип отображения, чтобы ширина подчеркивания соответствовала ширине текста */
	text-decoration: none; /* убираем стандартное подчеркивание */
}

.btn-hover-link::before {
	content: '_';
    /* устанавливаем пустое содержимое для псевдоэлемента */
	position: absolute; /* устанавливаем абсолютное позиционирование */
	left: 0; /* сдвигаем подчеркивание в самое начало родительского элемента */
	bottom: -5px; /* опускаем подчеркивание на 5 пикселей ниже нижней границы родительского элемента */
	width: 100%; /* задаем ширину подчеркивания равной ширине родительского элемента */
	height: 2px; /* задаем высоту подчеркивания */ /* задаем цвет подчеркивания */
	transform: scaleX(0) translateY(-20px);
    /* устанавливаем начальное значение шкалы преобразования равное 0, чтобы подчеркивание изначально было невидимым */
	transition: transform 0.3s ease-out;
	/* добавляем плавный переход ширины подчеркивания */
}

.btn-hover-link:hover::before {
	transform: scaleX(30) translateY(-20px);
    /* при наведении увеличиваем ширину подчеркивания до 100% */
}

</style>