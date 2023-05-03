<template>
    <hr/>
    <div class="main"
         style="justify-content: space-between">
        <div class="instruments"
             style="display: flex;
  flex-grow: 1; ">
            <div class="input">
                <dnlkk-input list="tags"
                             v-focus
                             v-model="searchTag"
                             placeholder="Поиск по тегам......"
                             :posts="posts"
                             v-on:keyup.enter="onEnter"/>
                <datalist id="tags"
                          v-if="sortedTags.length > 0">
                    <option v-for="sortedTag in sortedTags"
                            :value="sortedTag.name"/>
                </datalist>
            </div>
            <div class="input">
                <dnlkk-select
                        v-model="selectedSort"
                        :options="sortOptions"
                        @change="onChangeSort"/>
            </div>
            <div class="input">
                <dnlkk-select
                        v-model="selectedFilter"
                        :options="filterOptions"
                        @change="onChangeFilter"/>
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
                    :posts="sortedAndSearchedEvents"
            @update="fetchPosts"/>
        </div>
    </div>
</template>

<script>
import EventPost from "@/components/EventPost.vue";
import PersonalCabinet from "@/views/PersonalCabinet.vue";
import EventPosts from "@/components/EventPosts.vue";
import axios from "axios";
import {BASE_URL} from "@/baseUrl";

export default {
    name: "CalendarPage",
    components: {
        EventPosts, PersonalCabinet, EventPost
    },
    data() {
        return {
            posts: [],
            selectedSort: 'Все',
            searchTag: '',
            searchTags: [],
            searchedTags: [],
            baseTags: [],
            sortOptions: ['Все'],
            filterOptions: ['По id (станд.)',
                'По возрастанию голосов',
                'По убыванию голосов'],
            selectedFilter: 'По id (станд.)'
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
                        .toLowerCase())).sort((post1,
                                               post2) => {
                if (this.selectedFilter ===
                    this.filterOptions[0]) {
                    return post1.id - post2.id
                }
                if (this.selectedFilter ===
                    this.filterOptions[1]) {
                    return post1.sumVotes - post2.sumVotes
                }
                if (this.selectedFilter ===
                    this.filterOptions[2]) {
                    return post2.sumVotes - post1.sumVotes
                }
            })
        },
        sortedTags() {
            return this.baseTags.filter(tag =>
                tag.name.includes(this.searchTag))
            // tag.includes(this.searchTag))
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

                this.posts = obj.data

            console.log(this.posts);
        },
        async fetchTypes() {
            let obj = await axios
                .get(`${BASE_URL}events/types`)
            obj.data.forEach(post => {
                this.sortOptions.push(post.displayName)
            })
            console.log("das");
            console.log(obj);
        },
        onChangeSort(elem) {
            this.selectedSort = elem.target.value
        },
        onChangeFilter(elem) {
            this.selectedFilter = elem.target.value
        }
    },
    mounted() {
        this.fetchTags();
        this.fetchPosts();
        this.fetchTypes();
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