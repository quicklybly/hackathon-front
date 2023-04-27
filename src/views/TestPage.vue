<template>
    <h3>hi there!</h3>
    <hr/>
    <div class="input">
        <dnlkk-input
                v-focus
                v-model="searchTag"
                placeholder="Поиск по тегам......"
                :posts="posts"
                v-on:keyup.enter="onEnter"/>
    </div>
    <br/>
    <div class="input">
        <dnlkk-array-slider
            :tags="searchTags"
            :is-removable="true"
        @remove="onRemove"/>
    </div>
    <event-posts
            :posts="sortedAndSearchedEvents"/>
    <personal-cabinet/>
</template>

<script>
import EventPost from "@/components/EventPost.vue";
import PersonalCabinet from "@/views/PersonalCabinet.vue";
import EventPosts from "@/components/EventPosts.vue";

export default {
    name: "TestPage",
    components: {
        EventPosts, PersonalCabinet, EventPost
    },
    data() {
        return {
            posts: [{
                title: 'test1',
                body: 'hi there!',
                rating: -22,
                tags: ['c', 'crips', 'a lot of food', 'middle'],
                filter: 'CTF'
            },
                {
                    title: 'test2',
                    body: 'F:LSAJOPFJASOFJASPIHJFPOQWKFPOASJPOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!',
                    rating: 100,
                    tags: ['flask', 'spring', 'summer', 'avangard'],
                    filter: 'hackathon'
                },
                {
                    title: 'test3',
                    body: 'hi there!',
                    rating: -9999,
                    tags: ['fanta', 'cola', 'senior', 'sprite', 'google'],
                    filter: 'algorithmic'
                },
                {
                    title: 'test4',
                    body: 'hi!!! there!',
                    rating: 101,
                    tags: ['c', 'spring', 'vue.js',
                        'IE'],
                    filter: 'algorithmic'
                },
            ],
            selectedSort: 'tags',
            searchTag: '',
            searchTags: [],
            searchedTags: []
        }
    },
    computed: {
        sortedAndSearchedEvents() {
                return [...this.update()].filter(post =>
                        post.tags.join('').includes(
                            this.searchTag
                                .toLowerCase()))
        }
    },
    methods: {
        onEnter() {
            this.searchTags.push(this.searchTag)
            this.searchTag = ''

            this.searchedTags = this.update()
            console.log(this.searchedTags)
        },
        onRemove(tag){
            let index = this.searchTags.indexOf(tag)

            console.log(index)

            if (index !== -1) {
                this.searchTags.splice(index, 1)
                this.update()
            }

        },
        update() {
            return [...this.posts].filter(subArr =>
                this.searchTags.every(el =>
                    subArr.tags.includes(el)))
        }
    }
}
</script>

<style scoped>
.input {
	display: flex;
	justify-content: center;
}
</style>