<template>
    <h3>hi there!</h3>
    <hr/>
    <div class="main">
        <div class="instruments">
            <div class="input">
                <dnlkk-input
                        v-focus
                        v-model="searchTag"
                        placeholder="Поиск по тегам......"
                        :posts="posts"
                        v-on:keyup.enter="onEnter"/>
            </div>
            <div class="input">
                <dnlkk-select
                        v-model="selectedSort"
                        :options="sortOptions"
                        @change="onChange"/>
            </div>
            <br/>
        </div>
        <div>
            <div class="input">
                <dnlkk-array-slider
                        :tags="searchTags"
                        :is-removable="true"
                        @remove="onRemove"/>
            </div>
            <event-posts
                    :posts="sortedAndSearchedEvents"/>
        </div>
    </div>
    <personal-cabinet/>
</template>

<script>
import EventPost from "@/components/EventPost.vue";
import PersonalCabinet from "@/views/PersonalCabinet.vue";
import EventPosts from "@/components/EventPosts.vue";
import axios from "axios";

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
            selectedSort: 'Все',
            searchTag: '',
            searchTags: [],
            searchedTags: [],
            sortOptions: ['Все', 'CTF', 'hackathon',
                'algorithmic']
        }
    },
    computed: {
        sortedEvents() {
            if (this.selectedSort === this.sortOptions[0]) {
                return [...this.update()];
            }
            return [...this.update()].filter(post =>
                post.filter === this.selectedSort
            )
        },
        sortedAndSearchedEvents() {
            return this.sortedEvents.filter(post =>
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
        onRemove(tag) {
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
        },
        async fetchPosts() {
            let obj = await axios
                .get('http://95.140.158.92:8080/api/events/tags')
            console.log(obj)
        },
        onChange(elem){
            this.selectedSort = elem.target.value
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>

<style scoped>
.input {
	display: flex;
	justify-content: center;

	margin: 5px 0;
}

.main {
	display: flex;
	flex-direction: row;

	margin: 30px 20px;
}

.instruments {
	display: flex;
	flex-direction: column;
}
</style>