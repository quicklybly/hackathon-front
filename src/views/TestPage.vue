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
import {BASE_URL} from "@/baseUrl";

export default {
    name: "TestPage",
    components: {
        EventPosts, PersonalCabinet, EventPost
    },
    data() {
        return {
            posts: [
                /*{
                title: 'test1',
                description: 'hi there!',
                rating: -22,
                tags: ['c', 'crips', 'a lot of food', 'middle'],
                type: 'CTF'
            },
                {
                    title: 'test2',
                    description: 'F:LSAJOPFJASOFJASPIHJFPOQWKFPOASJPOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!',
                    rating: 100,
                    tags: ['flask', 'spring', 'summer', 'avangard'],
                    type: 'Продуктовое программирование'
                },
                {
                    title: 'test3',
                    description: 'hi there!',
                    rating: -9999,
                    tags: ['fanta', 'cola', 'senior', 'sprite', 'google'],
                    type: 'Спортивное программирование'
                },
                {
                    title: 'test4',
                    description: 'hi!!! there!',
                    rating: 101,
                    tags: ['c', 'spring', 'vue.js',
                        'IE'],
                    type: 'Спортивное программирование'
                },*/
            ],
            selectedSort: 'Все',
            searchTag: '',
            searchTags: [],
            searchedTags: [],
            baseTags: [],
            sortOptions: ['Все', 'CTF',
                'Продуктовое программирование',
                'Спортивное программирование']
        }
    },
    computed: {
        sortedEvents() {
            if (this.selectedSort === this.sortOptions[0]) {
                return [...this.update()];
            }
            return [...this.update()].filter(post =>
                post.type.displayName === this.selectedSort
            )
        },
        sortedAndSearchedEvents() {
            return this.sortedEvents.filter(post =>
                post.tags.map(obj => obj.name.toLowerCase()).join('').includes(
                    this.searchTag
                        .toLowerCase()))
        }
    },
    methods: {
        onEnter() {
            this.searchTags.push({name: this.searchTag})
            this.searchTag = ''

            this.searchedTags = this.update()
            console.log(this.searchedTags)
        },
        onRemove(tag) {
            let index = this.searchTags.map(obj =>
                obj.name)
                .indexOf(tag)

            console.log(index)

            if (index !== -1) {
                this.searchTags.splice(index, 1)
                this.update()
            }

        },
        update() {
            console.log(this.posts)
            console.log(this.searchTags);
            console.log(this.searchTag);
            console.log(
                [...this.posts].filter(subArr =>
                this.searchTags.every(el =>
                    subArr.tags.map(obj => obj.name.toLowerCase()).includes(el.name.toLowerCase()))));
            return [...this.posts].filter(subArr =>
                this.searchTags.every(el =>
                    subArr.tags.map(obj => obj.name.toLowerCase()).includes(el.name.toLowerCase())))
        },
        async fetchTags() {
            let obj = await axios
                .get(`${BASE_URL}events/tags`)
            obj.data.forEach(tag => this.baseTags.push(tag))
            console.log(this.baseTags);
        },
        async fetchPosts() {
            let obj = await axios
                .get(`${BASE_URL}events/`)
            obj.data.forEach(post => {
                this.posts.push(post)
            })
            console.log(this.posts);
        },
        onChange(elem){
            this.selectedSort = elem.target.value
        }
    },
    mounted() {
        this.fetchTags();
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