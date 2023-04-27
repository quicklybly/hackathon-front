<template>
    <div
        v-for="post in posts">
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
    props: {
      posts:{
          type: Array
      }
    },

}
</script>

<style scoped>

</style>