<template>
    <div
        v-for="post in posts[0]">
        <event-post :post="post"/>
        <hr />
    </div>
</template>

<script>
import EventPost from "@/components/EventPost.vue";
import usePosts from "@/components/hooks/usePosts";

export default {
    name: "EventPosts",
    components: {EventPost},
    setup(props) {
        const {
            posts
        } = usePosts();

        return {
            posts
        }
    }
}
</script>

<style scoped>

</style>