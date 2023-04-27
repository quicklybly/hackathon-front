<template>
  <select :value="modelValue"
          @change="changeOption">
      <option disabled value="">
          Choose from list
      </option>
      <option v-for="option in options"
              :key="option"
              :value="option">
          {{ option }}
      </option>
  </select>
</template>

<script>
export default {
    name: "dnlkk-select",
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue',
                event)
        }
    }
}
</script>

<style scoped>

</style>