<template>
    <div class="footer">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-6 col-md-6" style="margin: auto">
                    <img @click="$router.push('/')"
                         src="./img/dark_background1.png"
                         class="img-fluid clickable">
                </div>
              <div class="col-lg-4 col-md-1"></div>
                <div class="col-lg-2 col-md-3 itd_circles">
                    <div class="itd_circle">
                        <img src="../components/img/icon/letter.png" style="max-width: 35px; max-height: 35px; margin-top: 3px"/>
                    </div>
                </div>
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
	min-width: 50px;
	min-height: 50px;
	border: 3px solid #3A3C46;
	border-radius: 50%;

  cursor: pointer;
}

.itd_circles {
	padding-top: 15px;
  margin: auto;
	display: flex;
  align-self: center;
  justify-content: center;
}

.clickable {
	cursor: pointer;
}

</style>
