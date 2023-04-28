<template>
    <div style="display: flex; ">
    <h3 style="border: 1px solid black; align-self: center">logo</h3>
      <div>
      <h2>{{ fullname }}</h2>
        <h3>{{ birthDate }}</h3>
        <h4>{{ passport }}</h4>
        <h4>{{ email }}</h4>
      </div>
    </div>
</template>

<script>
import {useInfo} from "@/components/hooks/useInfo";

export default {
    name: "PersonalCabinet",
    setup(props) {
        const {
            fullname,
            login,
            birthDate,
            passport,
            email
        } = useInfo();

        return {
            fullname,
            login,
            birthDate,
            passport,
            email
        }
    }
}
</script>

<style scoped>

</style>