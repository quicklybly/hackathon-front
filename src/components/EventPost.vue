<template>
    <div style="display: flex;">
        <img src="../assets/logo.png"/>
        <div style="display: flex; flex-direction:
            column">
            <h1>{{ post.title }}</h1>
            <h4>{{ post.body }}</h4>
        </div>
    </div>

    <div style="display: flex; justify-content: space-between">
        <div style="display: flex">
          <h1>☻</h1>
          <h1>{{ post.rating }}</h1>
          <h1>☺</h1>
        </div>
        <div style="display: flex; align-self: center;">
            <div style="border: 1px solid black; padding:
             2px 5px; margin: 0 10px;">
                {{ post.filter }}
            </div>
            <dnlkk-array-slider :tags="post.tags"/>
        </div>
    </div>
</template>

<script>
import {
    useEventPost
} from "@/components/hooks/useEventPost";

export default {
    name: "EventPost",
    props: {
        post: Object,
        required: true
    }
}
</script>

<style scoped>

</style>