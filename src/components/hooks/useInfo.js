import {computed, ref} from "vue";

export function useInfo() {

    const name = ref(this.$store.state.self.name)
    const surname = ref(this.$store.state.self.surname)
    const patronymic = ref(this.$store.state.self.patronymic)
    const birthDate = ref(this.$store.state.self.birthday)
    const login = ref(this.$store.state.self.username)
    const passport = ref(this.$store.state.self.document)
    const email = ref(this.$store.state.self.email)

    let named = name.value.trim()
    named = named.charAt(0).toUpperCase() + named.substring(1)

    let surnamed = surname.value.trim()
    surnamed = surnamed.charAt(0).toUpperCase() + surnamed.substring(1)

    let patronymiced = patronymic.value.trim()
    patronymiced = patronymiced.charAt(0).toUpperCase() + patronymiced.substring(1)

    const fullname =  `${named} ${surnamed} ${patronymiced}`.trim()

    return {
        fullname,
        login,
        birthDate,
        passport,
        email
    }
}