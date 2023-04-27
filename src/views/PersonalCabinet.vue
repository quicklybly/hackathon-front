<template>
    <div style="display: flex; ">
    <h3 style="border: 1px solid black; align-self: center">logo</h3>
      <div>
      <h2>{{ fullname }}</h2>
        <h3>{{ city }}</h3>
        <h3>{{ birthDate }}</h3>
        <h4>{{ phoneNumber }}</h4>
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
            birthDate,
            city,
            phoneNumber,
            email
        } = useInfo();

        return {
            fullname,
            birthDate,
            city,
            phoneNumber,
            email,

        }
    }
}
</script>

<style scoped>

</style>