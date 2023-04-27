<template>
  <link rel="stylesheet" href="fontello-a6d9d753/css/fontello.css">
  <div class = "footer container text-center">
    <div class="row">
      <div class="col-6"><img src = "./img/dark_background1.png" class="img-fluid"></div>
      <div class="col-4"></div>
      <div class="col-2 itd_circles">
        <div class="itd_circle"><i class = "icon-vkontakte"></i></div>
        <div class="itd_circle"><i class = "icon-youtube-play"></i></div>
        <div class="itd_circle"><i class = "icon-telegram"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "FooterBar"
}
</script>

<style scoped>
.footer {
  background-color: #1B1C21;
}
.itd_circle {
  margin: 0 auto 15px;
  width: 50px;
  height: 50px;
  border: 3px solid #3A3C46;
  border-radius: 50%;
}
.itd_circles {
  padding-top: 15px;
  display: flex;
}

</style>