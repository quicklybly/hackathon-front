import {computed, ref} from "vue";

export function useInfo() {

    const name = ref('name')
    const surname = ref('surname')
    const birthDate = ref('01.01.1970')
    const city = ref('voronezh')
    const phoneNumber = ref('89001234567')
    const email = ref('mail@mail.ru')

    let named = name.value.trim()
    named = named.charAt(0).toUpperCase() + named.substring(1)

    let surnamed = surname.value.trim()
    surnamed = surnamed.charAt(0).toUpperCase() + surnamed.substring(1)

    const fullname =  `${named} ${surnamed}`

    return {
        name,
        surname,
        fullname,
        birthDate,
        city,
        phoneNumber,
        email
    }
}