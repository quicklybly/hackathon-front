<template>
  <h3>hi there!</h3>
    <hr/>
  <event-posts/>
  <personal-cabinet/>
</template>

<script>
import EventPost from "@/components/EventPost.vue";
import PersonalCabinet from "@/views/PersonalCabinet.vue";
import EventPosts from "@/components/EventPosts.vue";

export default {
    name: "TestPage",
    components: {EventPosts, PersonalCabinet, EventPost}
}
</script>

<style scoped>

</style>