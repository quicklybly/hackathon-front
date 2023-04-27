<template>
  <link rel="stylesheet" href="/src/components/fontello-a6d9d753/css/fontello.css">
    <nav-bar/>
    <div id="app">
        <router-view/>
    </div>
    <footer-bar/>
</template>

<style>
* {
	margin: 0;
	box-sizing: border-box;
    font-family: "JetBrains Mono", serif;
}

#app {
	min-height: 85vh;
	background: white;
}
</style>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>