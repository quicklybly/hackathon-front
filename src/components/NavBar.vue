<template>
    <div class="navbar">
        <div @click="$router.push('/')">
            <h2 style="color: white;">logo placeholder</h2>
        </div>
        <div class="info-panel">

        </div>
    </div>
</template>

<script>

export default {
    name: "NavBar",
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: teal;
    padding: 10px;

}

.info-panel {
    display: flex;
}
</style>