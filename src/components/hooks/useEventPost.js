import {ref} from "vue";

export function useEventPost(prop) {
    const title = ref('')
    const body = ref('')
    const rating = ref(0)
    const filter = ref('')
    const tags = ref([])

    title.value = 'test'
    body.value = 'test'
    rating.value = -1
    filter.value = 'hackathon'
    tags.value = ['junior', 'frontend', 'c++', 'ai/ml', 'python']

    return {
        title, body, rating, filter, tags
    }
}