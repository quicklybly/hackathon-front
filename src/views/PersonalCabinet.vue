<template>
    <div class="container-fluid">
      <div class="row" style="margin-top: 30px">
        <div class="col-lg-3 col-md-5 col-sm-12 text-center">
          <img src="../components/img/icon/user-icon.png" class="user-icon">
        </div>
        <div class="col-lg-5 col-md-7 col-sm-12 main-inform">
          <p style="font-size: 25px; font-weight: 600;
          margin-left: -1px">{{ fullname }}</p>
          <p style="font-size: 22px; font-weight: 600;
          color: #EC1D35">{{ email }}</p>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 sec-inform" >
          <p style="font-size: 22px; font-weight: 600;">Паспорт</p>
          <p style="font-size: 22px; font-weight: 600;">Дата рождения</p>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 third-inform">
          <p
                  style="font-size: 25px; font-weight: 500;">{{ passport }}</p>
          <p
                  style="font-size: 22px; font-weight:
                  500;">{{ formatDate(birthDate) }}</p>
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
import {mapState} from "vuex";

export default {
    name: "PersonalCabinet",
    computed: {
        ...mapState({
            fullname: state => {
                let named = state.self.name.trim()
                named = named.charAt(0).toUpperCase() + named.substring(1)

                let surnamed = state.self.surname.trim()
                surnamed = surnamed.charAt(0).toUpperCase() + surnamed.substring(1)

                let patronymiced = state.self.patronymic.trim()
                patronymiced = patronymiced.charAt(0).toUpperCase() + patronymiced.substring(1)

                return `${named} ${surnamed} ${patronymiced}`.trim()
            },
            login: state => state.self.username,
            birthDate: state => state.self.birthday,
            passport: state => state.self.document,
            email: state => state.self.email
        })
    }
}
</script>

<style scoped>

p{
  color: #3A3C46;
}

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