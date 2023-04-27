<template>
    <div class="home">
        <dnlkk-button>hi there!</dnlkk-button>
        <dnlkk-input v-focus
                     v-mode="title"
                    placeholder="hi there!"/>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
            title: ''
        }
    }

}
</script>
