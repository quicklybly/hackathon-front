<template>
    <div class="home">
        <div class="container-fluid map-place fsr-text">
          <div class="row">
            <div class="col-12" style="padding-bottom: 80px; padding-left: 30px">
              <h1 class="h1-b h1-b-md">Федерация</h1>
              <h1 class="h1-b h1-b-md">спротивного</h1>
              <h1 class="h1-b h1-b-md">программирования</h1>
            </div>
          </div>
        </div>
      <div class="container-fluid" style="background-color:#1B1C21;">
        <div class="row">
          <div class="col-lg-3 col-md-1">
            <p style="margin-left: 74px">О федерации</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-0 text-center">
            <img src="../components/img/белая_звезда.png" style="width: 50px; height: 50px;">
          </div>
          <div class="col-lg-6 col-md-10 col-sm-12">
            <h1 class="h1-w h1-w-md">Федерация</h1>
            <h1 class="h1-w h1-w-md">спротивного</h1>
            <h1 class="h1-w h1-w-md">программирования</h1>
            <p></p>
            <p style="padding: 20px">Обзероссийская общественная организация, деятельность которой нарпавлена на развитие и популяризацию спортивного программирования среди населения страны, организацию и проведение соревнований, а также оказание содействия в подготовке тренеров и спортсменов</p>
          </div>
          <div class="col-lg-3 col-md-0">
          </div>
        </div>
      </div>
      <div class="container-fluid" style="background-color: #EDEDED;">
        <div class="row">
          <div class="text-decoration-underline" style="font-size: 20px; font-weight: 800; padding: 40px;">Фотографии с прошедших соревнований</div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <img class="lg-ph md-ph sm-ph" src="../components/img/photo/photo1.jpg">
          </div>
          <div class="col-12 text-center">
            <img class="lg-ph md-ph sm-ph" src="../components/img/photo/photo2.jpg">
          </div>
          <div class="col-12 text-center">
            <img class="lg-ph md-ph sm-ph" src="../components/img/photo/photo3.jpg">
          </div>
          <div class="col-12 text-center">
            <img class="lg-ph md-ph sm-ph" src="../components/img/photo/photo4.jpg">
          </div>
        </div>
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
  background-position: 400px -120px;
  background-repeat: no-repeat;
  min-height: 85vh;
}
p{
  color: #EDEDED;
  padding: 40px;
  padding-left: 30px;
}

@media (max-width: 2560px) {
  .lg-ph {
    height: 700px;
    width: 1000px;
    margin: 20px;
  }
}
@media (max-width: 768px) {
  .md-ph {
    height: 400px;
    width: 600px;
  }
  .map-place {
    background-color: #EDEDED;
    background-image: url("../components/img/map.png");
    background-size: cover;
    background-position: 400px -120px;
    background-repeat: no-repeat;
    min-height: 20vh;
  }
  .h1-w-md{
    color: #EDEDED;
    font-weight: 900;
    font-size: 30px;
    margin: auto;
  }
  .h1-b-md{
    color: #1B1C21;
    font-weight: 900;
    font-size: 30px;
    margin: auto;
  }
}
@media (max-width: 576px) {
  .sm-ph {
    height: 100px;
    width: 200px;
  }
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
