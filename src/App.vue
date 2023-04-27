<template>
    <nav-bar />
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
* {
    margin: 0;
    box-sizing: border-box;
}
</style>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>