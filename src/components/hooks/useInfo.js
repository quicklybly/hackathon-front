import {computed, ref} from "vue";

export function useInfo() {

    const name = ref('name')
    const surname = ref('surname')
    const patronymic = ref('ot4estvo')
    const birthDate = ref('01.01.1970')
    const login = ref('login')
    const passport = ref('1817012345')
    const email = ref('mail@mail.ru')

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