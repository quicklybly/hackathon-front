<script>
export default {
    name: "dnlkk-space-text",
    props: {
        displayText: { type: String },
        data: { type: String }
    }
}
</script>

<template>
    <div class="container text_info__cont">
        <div class="display-flex">
            <h2>{{ displayText }}:</h2>
        </div>
        <div class="display-flex" style="text-align:
          right;"><h2>{{ data }}</h2></div>
    </div>
</template>

<style scoped>

.text_info__cont {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;


}

.display-flex {
	display: flex;
	flex-direction: column;
}
</style>