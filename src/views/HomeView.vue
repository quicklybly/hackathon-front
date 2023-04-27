<template>
    <div class="home">
        <dnlkk-button
            @click="showDialog"
            class="info">hi there
            !</dnlkk-button>
        <dnlkk-input v-focus
                     v-mode="title"
                    placeholder="hi there!"/>
<!--        <dnlkk-dialog-->
<!--            v-model:show="dialogVisible">-->
<!--        <sign-in-page/>-->
<!--        </dnlkk-dialog>-->
    </div>
</template>

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
