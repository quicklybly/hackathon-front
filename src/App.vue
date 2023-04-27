<template>
    <nav-bar />
    <div id="app">
        <router-view/>
    </div>
    <footer-bar/>
</template>

<style>
* {
    margin: 0;
    box-sizing: border-box;
}
#app {

}
</style>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>