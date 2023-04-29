<template>
    <div class="header">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-xs-12" style="margin: auto">
                    <img
                        @click="$router.push('/')"
                        src="./img/ФСП_Короткий1.png"
                        class="img-fluid clickable">
                </div>
                <div class="col-lg-2 col-md-2 col-xs-12" style="margin: auto">
                    <button
                        @click="$router.push('/news')"
                        type="button"
                        class="btn btn-itm-color btn-lg">
                        Календарь
                    </button>
                </div>
                <div class="col-lg-2 col-md-2 col-xs-12" style="margin: auto">
                    <button
                        @click="$router.push('/events')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        События
                    </button>
                </div>
                <div class="col-lg-2 col-md-2 col-xs-12" style="margin: auto">
                    <button
                        @click="$router.push('/about')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        Контакты
                    </button>
                </div>
                <div class="col-lg-2 col-md-1 col-xs-12" style="margin: auto"></div>
                <div class="col-lg-2 col-md-3 col-xs-12" style="margin: auto">
                    <dnlkk-button
                        v-if="!$store.state.isAuth"
                        @click="$router.push('/auth')"
                        type="button"
                            class="btn btn-itm-color btn-lg">
                        войти
                    </dnlkk-button>
                    <div v-else style="display: flex">
                        <dnlkk-button
                            @click="$router.push('/lk')"
                            type="button"
                            class="btn btn-itm-color btn-lg">
                            {{ username }}
                        </dnlkk-button>
                        <dnlkk-button
                            @click="$router.push('/auth'); $store.commit('unAuth');"
                            type="button"
                            class="btn btn-itm-color btn-lg">
                            выйти
                        </dnlkk-button>

                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {
    name: "NavBar",
    computed: {
        ...mapState({
            username: state => state.self.username
        })
    },
    watch: {
        username(newValue){
            this.username = newValue
        }
    },
    mounted() {
        this.$store.dispatch('login', {
            headers: {
                'Authorization':
                    'Bearer ' +
                    localStorage.getItem('jwt')
            }
        })
            .then()
            .catch(error => {
                console.error(error)
            })
    }
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