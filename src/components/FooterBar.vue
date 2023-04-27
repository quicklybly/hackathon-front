<template>
    <div class="footer">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-6 col-md-6" style="margin: auto">
                    <img @click="$router.push('/')"
                         src="./img/dark_background1.png"
                         class="img-fluid clickable">
                </div>
              <div class="col-lg-4 col-md-1"><i class="icon-mail"></i></div>
                <div class="col-lg-2 col-md-3 itd_circles">
                    <div class="itd_circle">
                      <i class="icon-vkontakte"/>
                    </div>
                    <div class="itd_circle">
                      <div><i class="icon-youtube-play"/></div>
                    </div>
                    <div class="itd_circle">
                        <i class="icon-telegram"/>
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
}

.itd_circles {
	padding-top: 15px;
	display: flex;
}

.clickable {
	cursor: pointer;
}

</style>
