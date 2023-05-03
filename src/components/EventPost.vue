<template>
    <div style="margin: 10px 50px; padding: 10px 5px;
        border: 1px solid #9B9C9E; border-radius: 15px;">
        <div style="display: flex;">
            <div style="display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin: 0 20px 0 10px">
                <img src="../assets/logo.png"
                     style="aspect-ratio: 1/1;
                 width: auto;
                 object-fit: scale-down"/>
                <div style="display: flex; justify-content: space-between">
                    <div style="display: flex">
                        <h1 class="contain"
                            @click="upVote"
                            style="color: cornflowerblue; cursor: pointer">
                            ▲</h1>
                        <h1 class="contain"
                            :style='{color: color}'>
                            {{ sumVotes }} </h1>
                        <h1 class="contain"
                            @click="downVote"
                            style="color: indianred; cursor: pointer">
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
                    {{ dateFormat(post.dateStart) }}
                           &mdash;
                    {{ dateFormat(post.dateEnd) }}</h5>
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
            monthNames: [
                "Январь", "Февраль", "Март", "Апрель",
                "Май", "Июнь", "Июль", "Август",
                "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ]
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
    methods: {
        dateFormat(date) {
            let arr = date.split('-');
            return arr[2] + ' ' + this.monthNames[+arr[1]
                - 1]
                + `'${arr[0].slice(2)}`
        },
        upVote() {
            if (this.vote === -1) {
                this.postVote(this.post.id, 0)
                this.color = 'black'
                this.vote = 0
            } else {
                this.postVote(this.post.id, 1)
                this.color = 'cornflowerblue'
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
                this.color = 'indianred'
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