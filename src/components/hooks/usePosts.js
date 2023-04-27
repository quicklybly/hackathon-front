import {ref} from "vue";

export default function usePosts(props) {
    const posts = ref([])

    posts.value.push(props['posts'])

    console.log(posts)

    return {
        posts
    }
}