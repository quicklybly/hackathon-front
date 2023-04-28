<template>
    <div class="home">
        <div class="container-fluid map-place fsr-text">
          <div class="row">
            <div class="col-12" style="padding-bottom: 80px; padding-left: 30px">
              <h1 class="h1-b">Федерация</h1>
              <h1 class="h1-b">спротивного</h1>
              <h1 class="h1-b">программирования</h1>
            </div>
          </div>
        </div>
      <div class="container-fluid" style="background-color:#1B1C21;">
        <div class="row">
          <div class="col-3">
            <p style="margin-left: 74px">О федерации</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-center">
            <img src="../components/img/белая_звезда.png" style="width: 50px; height: 50px;">
          </div>
          <div class="col-6">
            <h1 class="h1-w">Федерация</h1>
            <h1 class="h1-w">спротивного</h1>
            <h1 class="h1-w">программирования</h1>
            <p></p>
            <p style="padding: 20px">Обзероссийская общественная организация, деятельность которой нарпавлена на развитие и популяризацию спортивного программирования среди населения страны, организацию и проведение соревнований, а также оказание содействия в подготовке тренеров и спортсменов</p>
          </div>
          <div class="col-3">
          </div>
        </div>
      </div>
      <div class="container-fluid" style="background-color: #EDEDED;">
        <div class="text-decoration-underline" style="height: 80vh; font-size: 20px; font-weight: 800; padding: 40px;">Фотографии с прошедших соревнований</div>
      </div>
    </div>
</template>

<style>
.home {
  background-color: #EDEDED;
}
.fsr-text{
  display: flex;
  flex-direction: column;
  
  justify-content: flex-end;
  align-items: flex-start;
}
.h1-b {
  color: #1B1C21;
  font-weight: 900;
  font-size: 50px;
  margin: -10px;
  padding-left: 30px;
}
.h1-w {
  color: #EDEDED;
  font-weight: 900;
  font-size: 50px;
  margin: -10px;
  padding-left: 30px;
}
.map-place {
  background-color: #EDEDED;
  background-image: url("../components/img/map.png");
  background-size: cover;
  background-position: 400px -150px;
  background-repeat: no-repeat;
  min-height: 80vh;
}
p{
  color: #EDEDED;
  padding: 40px;
  padding-left: 30px;
}


</style>

<script>
// @ is an alias to /src

import SignInPage from "@/views/AuthPage.vue";

export default {
    name: 'HomeView',
    components: {SignInPage},
    data() {
        return {
            title: '',
            dialogVisible: false,
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true
        },
    }

}
</script>
