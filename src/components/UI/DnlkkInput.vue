<template>
    <input :value="modelValue"
           @input="updateInput"
           class="input" type="text">
</template>

<script>

export default {
    name: "dnlkk-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>

</style>