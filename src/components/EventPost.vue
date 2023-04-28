<template>
    <div style="margin: 10px 50px; padding: 10px 5px;
        border: 1px solid #9B9C9E; border-radius: 15px;">
        <div style="display: flex;">
            <img src="../assets/logo.png"
                 style="aspect-ratio: 1/1;
                 width: auto;
                 object-fit: scale-down;"/>
            <div style="display: flex; flex-direction:
            column">
                <h1>{{ post.title }}</h1>
                <h4 style="word-break: break-all">{{
                    post.description
                    }}</h4>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between">
            <div style="display: flex">
                <h1 class="contain"
                    @click="upVote"
                    style="color: cornflowerblue; cursor: pointer">▲</h1>
                <h1 class="contain"
                    :style='{color: color}'>
                    123 </h1>
                <h1 class="contain"
                    @click="downVote"
                    style="color: indianred; cursor: pointer">▼</h1>
            </div>
            <div style="display: flex; align-self: center;">
                <div style="border: 1px solid black; padding:
             2px 5px; margin: 0 10px;">
                    {{ post.type.displayName }}
                </div>
                <dnlkk-array-slider :tags="post.tags"
                                    :is-removable="false"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "EventPost",
    data() {
        return {
            color: 'black',
        }
    },
    methods: {
        upVote() {
            this.color = 'cornflowerblue'
        },
        downVote() {
            this.color = 'indianred'
        }
    },
    props: ['post']
}
</script>

<style scoped>
.contain {
	display: flex;
	margin: 0;
}
</style>