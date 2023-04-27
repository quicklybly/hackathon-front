<template>
  <button class="btn btn-primary">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: "dnlkk-button"
}
</script>

<style scoped>
.btn {
	margin-top: 10px;
	padding: 10px 15px;
	border: 1px solid teal;
}

</style>