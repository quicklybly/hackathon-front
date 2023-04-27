<template>
    <div class="header">
        <div class="container text-center">
            <div class="row">
                <div class="col-2">
                    <img
                        @click="$router.push('/')"
                        src="./img/ФСП_Короткий1.png"
                        class="img-fluid clickable">
                </div>
                <div class="col-2">
                    <button
                        @click="$router.push('/news')"
                        type="button"
                        class="btn btn-itm-color btn-lg">
                        Новости
                    </button>
                </div>
                <div class="col-2">
                    <button
                        @click="$router.push('/test')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        Календарь
                    </button>
                </div>
                <div class="col-2">
                    <button
                        @click="$router.push('/about')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        Контакты
                    </button>
                </div>
                <div class="col-2"></div>
                <div class="col-2">
                    <button
                        @click="$router.push('/auth')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        войти
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DnlkkButton from "@/components/UI/DnlkkButton";

export default {
    name: "NavBar",
    components: {DnlkkButton},
}
</script>

<style scoped>
:root {
	--color1: #1B1C21; /*black*/
	--color2: #2D2E37; /*gray bright*/
	--color3: #3A3C46; /*gray middle*/
	--color4: #9B9C9E; /*gray lighte-2*/
	--color5: #D9D9D9; /*gray lighte*/
	--color6: #EDEDED; /*white*/
}

.header {
	background-color: #1B1C21;
}

.clickable {
    cursor: pointer;
}

.btn-itm-color {
	color: #EDEDED;
}

.col-2 {
    justify-content: center;
    align-self: center;
    align-items: center;
    align-content: center;
}
</style>