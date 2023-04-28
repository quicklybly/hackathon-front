<template>
    <div class="container-fluid">
      <div class="row" style="margin-top: 30px">
        <div class="col-lg-3 col-md-5 col-sm-12 text-center">
          <img src="../components/img/icon/user-icon.png" class="user-icon">
        </div>
        <div class="col-lg-5 col-md-7 col-sm-12 main-inform">
          <p style="font-size: 25px; font-weight: 600; margin-left: -1px">{{ fullname }}</p>
          <p style="font-size: 22px; font-weight: 600; color: #EC1D35">{{ email }}</p>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 sec-inform" >
          <p style="font-size: 22px; font-weight: 600;">Паспорт</p>
          <p style="font-size: 22px; font-weight: 600;">Дата рождения</p>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 third-inform">
          <p style="font-size: 25px; font-weight: 500;">{{ passport }}</p>
          <p style="font-size: 22px; font-weight: 500;">{{ birthDate }}</p>
        </div>
      </div>
    </div>
  <hr style="color: #EC1D35; border-width: 2px;">
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <p>тут бы сделать штуки в стиле календаря, только вместо тегов - место в соревновании данного участника</p>
      </div>
    </div>
  </div>
</template>

<script>
import {useInfo} from "@/components/hooks/useInfo";

export default {
    name: "PersonalCabinet",
    setup(props) {
        const {
            fullname,
            login,
            birthDate,
            passport,
            email
        } = useInfo();

        return {
            fullname,
            login,
            birthDate,
            passport,
            email
        }
    }
}
</script>

<style scoped>
@media (max-width: 2560px) {
  .user-icon {
    width: 100px;
    height: 100px;
    margin: auto
  }
  .main-inform {
    margin-left: -6%;
  }
  .sec-inform {
    margin-left: -7%;
  }
}
@media (max-width: 768px) {
  .user-icon {
    width: 100px;
    height: 100px;
    margin: auto
  }
  .main-inform {
    margin-left: -52px;
  }
  .sec-inform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: auto;
  }
}
@media (max-width: 576px) {
  .user-icon {
    width: 100px;
    height: 100px;
    margin: auto
  }
  .main-inform {
    margin: auto;
  }
  .sec-inform {
   display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .third-inform{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>