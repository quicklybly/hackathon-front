<template>
  <div class="about">
    <div class="container-fluid text-center bg-bl">
      <div class="row">
        <div class="col-12">
          <h2 style="color: #EDEDED; font-weight: 600; font-size: 40px;">Команда</h2>
        </div>
      </div>
      <div class="row" style="padding-bottom: 20px">
        <div class="col-4 people1">
          <img src="../components/img/people/Байсултанов_Одес.jpg">
          <div class="htext_people1">Байсултанов Одес</div>
          <div class="text_people1">Председатель Правления ФСП, заместитель Министра спорта Российской Федерации.</div>
        </div>
        <div class="col-4 people1">
          <img src="../components/img/people/Паршин_Максим.jpg">
          <div class="htext_people1">Паршин Максим</div>
          <div class="text_people1">Президент ФСП, заместитель Министра цифрового развития, связи и массовых коммуникаций.</div>
        </div>
        <div class="col-4 people1">
          <img src="../components/img/people/Аристов_Станислав.jpg">
          <div class="htext_people1">Аристов Станислав</div>
          <div class="text_people1">Исполнительный директор</div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center bg-wh">
      <div class="row">
        <div class="col-12">
          <h3 style="font-weight: 600; margin-top: 20px;">Вице-президенты</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <ul>
            <li class="people-list">Мурадов Юрий Георгиевич</li>
            <li class="people-list">Наливайко Сергей Иванович</li>
            <li class="people-list">Насуханов Юсуп Вахаевич</li>
          </ul>
        </div>
        <div class="col-6">
          <ul>
            <li class="people-list">Зотова Ирина Олеговна</li>
            <li class="people-list">Перовская Лидия Марковна</li>
            <li class="people-list">Ашрапова Дина Шамилевна</li>
          </ul>
          <div style="margin-top: 30px"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center bg-bl">
      <div class="row">
        <div class="col-12">
          <h3 style="color: #EDEDED; font-weight: 600; margin-top: 20px;">Члены правления</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <ul>
            <li class="people-list2">Лобов Вадим Георгиевич</li>
            <li class="people-list2">Цакараева Хава Мовсаровна</li>
            <li class="people-list2">Мухаметнурова Мария Андреевна</li>
            <li class="people-list2">Красавцев Евгений Евгеньевич</li>
            <li class="people-list2">Зарубин Юрий Владимирович</li>
          </ul>
        </div>
        <div class="col-6">
          <ul>
            <li class="people-list2">Антипов Алексей Алексеевич</li>
            <li class="people-list2">Филиппова Нэлли Валерьевна</li>
            <li class="people-list2">Антонов Роман Петрович</li>
            <li class="people-list2">Быков Алексей Сергеевич</li>
            <li class="people-list2">Новоселов Александр Михайлович</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid-fluid text-center bg-wh">
      <div class="row">
        <div class="col-12">
          <h3 style="font-weight: 600; margin-top: 20px;">Партнеры</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="cont-picture">
            <img src="../components/img/sponsors/Minsport_Emblem.png" style="width: 150px; height: 150px;overflow: hidden;">
          </div>
          <div class="cont-picture">
            <img src="../components/img/sponsors/mintsifryi-rossii-logogray.png" style="width: 450px; height: 150px;overflow: hidden;">
          </div>
        </div>
        <div class="col-6">
          <div class="cont-picture">
            <img src="../components/img/sponsors/СИНЕРГИЯ_Университет_Логотип.png" style="width: 150px; height: 150px;overflow: hidden;">
          </div>
          <div class="cont-picture">
            <img src="../components/img/sponsors/hh_ru.png" style="width: 150px; height: 150px;overflow: hidden;">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center bg-bl">
      <div class="row">
        <div class="col-12">
          <h3 style="color: #EDEDED; font-weight: 600; margin-top: 20px;">Контакты</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img src="../components/img/белая_звезда.png">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p style="color: #EDEDED; font-size: 20px; padding: 20px;">info@fsp-russia.com</p></div>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  padding: 20px;
  font-weight: 800;
}
h3 {
  padding: 20px;
  font-weight: 700;
}
.bg-bl{
  background-color: #1B1C21;
  background-size: cover;
}
.bg-wh{
  background-color: #EDEDED;
  background-size: cover;
}
.people1 {
  color: #EDEDED;
  font-size: 18px;
  padding: 10px;
}
.cont-picture{
  background-color: #3A3C46;

  width: 450PX;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: auto;
  margin-bottom: 30px;
}
.people-list{
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  margin-left: 20px;
}
.people-list2{
  color: #EDEDED;
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  margin-left: 20px;
}

.htext_people1 {
  padding: 10px;
  font-size: 24px;
  font-weight: 600;
}
</style>
