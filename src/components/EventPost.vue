<template>
    <div style="margin: 10px 50px; padding: 10px 5px;
        border: 1px solid #9B9C9E; border-radius: 15px;">
        <div style="display: flex;">
            <div style="display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin: 0 20px 0 10px">

                <h1
                    v-if="!isFavourite"
                    class="no-select"
                    @click="favourite"
                    style="color: #402fff">☆</h1>
                <h1 v-else
                    class="no-select"
                    @click="favourite"
                    style="color: #ec1d35">★</h1>

                <img src="../assets/logo.png"
                     style="aspect-ratio: 1/1;
                 width: auto;
                 object-fit: scale-down"/>
                <div style="display: flex; justify-content: space-between">
                    <div style="display: flex">
                        <h1 class="contain no-select"
                            @click="upVote"
                            style="color: #402fff; cursor:
                            pointer">
                            ▲</h1>
                        <h1 class="contain"
                            :style='{color: color}'>
                            {{ sumVotes }} </h1>
                        <h1 class="contain no-select"
                            @click="downVote"
                            style="color: #ec1d35; cursor: pointer">
                            ▼</h1>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction:
            column">
                <h1>
                    <a :href="post.link"
                       target="_blank"
                       style="font-weight: 900;
                    text-decoration: none; color: black">
                        {{ post.title }}
                    </a>
                </h1>
                <h5
                        style="font-style: italic">Дата
                    соревнований:
                    {{ formatDate(post.dateStart) }}
                    &mdash;
                    {{ formatDate(post.dateEnd) }}</h5>
                <h4 style="word-break: break-all">{{
                    post.description
                    }}</h4>
                <div style="display: flex; align-items: center;
                            justify-content: space-between">
                    <div style="border: 1px solid black; padding:
             2px 5px; margin: 0 10px;">
                        {{ post.type.displayName }}
                    </div>
                    <dnlkk-array-slider :tags="post.tags"
                                        :is-removable="false"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import {BASE_URL} from "@/baseUrl";
import Cookies from "js-cookie";

export default {
    name: "EventPost",
    data() {
        return {
            color: 'black',
            startVal: this.post.sumVotes,
            vote: 0,
            isFavourite: false
        }
    },
    computed: {
        sumVotes: {
            get() {
                return this.post.sumVotes
            },
            set(newValue) {
                return newValue
            }
        }
    },
    watch: {
        vote(newValue){
            this.vote = newValue
            switch (this.vote){
                case -1:
                    this.color = '#ec1d35'
                    break
                case 0:
                    this.color = 'black'
                    break
                case 1:
                    this.color = '#402fff'
                    break
                default:
                    break
            }
            console.log(`hi ther! ${this.vote} ${this.color}`)
        },
    },
    mounted() {
        this.alreadyVoted()
    },
    methods: {
        favourite() {
            this.isFavourite = !this.isFavourite
        },
        upVote() {
            if (this.vote === -1) {
                this.postVote(this.post.id, 0)
                this.color = 'black'
                this.vote = 0
            } else {
                this.postVote(this.post.id, 1)
                this.color = '#402fff'
                this.vote = 1
            }
            return this.vote
        },
        downVote() {
            if (this.vote === 1) {
                this.postVote(this.post.id, 0)
                this.color = 'black'
                this.vote = 0
            } else {
                this.postVote(this.post.id, -1)
                this.color = '#ec1d35'
                this.vote = -1
            }
            return this.vote
        },
        async postVote(competitionId, vote) {
            return await axios
                .post(`${BASE_URL}users/vote`, {
                        competitionId: competitionId, vote: vote
                    },
                    {
                        headers: {
                            'Authorization':
                                'Bearer ' +
                                Cookies.get('jwt')
                        }
                    })
                .then(response => {
                    console.log(response)
                    this.sumVotes = response.data
                    this.$emit('update')
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    return null
                });
        },
        async alreadyVoted() {
            return await axios
                .get(`${BASE_URL}events/${this.post.id}/vote`,
                    {
                        headers: {
                            'Authorization':
                                'Bearer ' +
                                Cookies.get('jwt')
                        }
                    })
                .then(response => {
                    console.log(response)
                    this.vote = response.data.vote
                    this.$emit('update')
                })
                .catch(error => {
                    console.log(error);
                    return null
                });
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