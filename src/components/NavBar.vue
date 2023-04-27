<template>
    <div class="navbar">
        <div @click="$router.push('/')">
            <h2 style="color: white;">logo placeholder</h2>
        </div>
        <div>
            <dnlkk-button
                    @click="$router.push('/sign-in')">
                Войти
            </dnlkk-button>
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

</style>