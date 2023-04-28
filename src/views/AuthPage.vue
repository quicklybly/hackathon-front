<template xmlns="http://www.w3.org/1999/html">
  <div class="content">
    <auth
          @reg="onChangeRegistration"
          @recovery="onChangeRecovery"
          v-if="!isRecovery && !isRegistration"/>
    <recovery
            @reg="onChangeRegistration"
            @recovery="onChangeRecovery"
            v-if="isRecovery"
            />
  <registration v-if="isRegistration"
                @reg="onChangeRegistration"/>
  </div>
</template>

<script>


import Auth from "@/components/Auth.vue";
import Recovery from "@/components/Recovery.vue";
import Registration from "@/components/Registration.vue";
import axios from "axios";
import {BASE_URL} from "@/baseUrl";

export default {
    name: "SignInPage",
    components: {Registration, Recovery, Auth},
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
        }
}
</script>

<style>
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