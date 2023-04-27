<template>
  <h3>hi there!</h3>
    <hr/>
    <dnlkk-input
            v-focus
            v-model="searchQuery"
            placeholder="Search......"
    :posts="posts"/>
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
        EventPosts, PersonalCabinet, EventPost},
    data() {
        return{
            posts: [{
                title: 'test1',
                body: 'hi there!',
                rating: -22,
                tags: ['c', 'crips', 'a lot of food', 'middle'],
                filter: 'CTF'},
                {title: 'test2',
                    body: 'F:LSAJOPFJASOFJASPIHJFPOQWKFPOASJPOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!',
                    rating: 100,
                    tags: ['flask', 'spring', 'summer', 'avangard'],
                    filter: 'hackathon'},
                {title: 'test3',
                    body: 'hi there!',
                    rating: -9999,
                    tags: ['fanta', 'cola', 'senior', 'sprite', 'google'],
                    filter: 'algorithmic'},
            ],
            selectedSort: 'tags',
            searchQuery: ''
        }
    },
    computed: {
        sortedAndSearchedEvents(){
            console.log(this.searchQuery);
            return [...this.posts].filter(post =>
                post.tags.join('')
                    .includes(this.searchQuery
                        .toLowerCase()))
        }
    },
}
</script>

<style scoped>

</style>