<template>
    <transition-group name="post-list">
        <div
            v-for="post in posts" :key="post.id">
            <event-post :post="post"
            @update="this.$emit('update')"/>
            <hr />
        </div>
    </transition-group>
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

.post-list event-post {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active, .post-list-leave-active {
    transition: all 0.4s ease;
}

.post-list-enter-from, .post-list-leave-to {
    opacity: 0;
    transform: translateY(150px);
}

.post-list-move {
    transition: transform 0.4s ease;
}
</style>