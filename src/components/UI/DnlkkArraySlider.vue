<template>
    <h3 @click="prevTag"
        v-if="current > 0">&lt;&lt;</h3>
    <transition-group name="tag-list">
        <div class="tag-item" style="border: 1px solid
        black;
                border-radius: 50%; align-self: center;
                padding: 2px 5px; margin: 0 10px"
             v-for="tag in chosenTags">
            {{ tag }}
        </div>
    </transition-group>
    <h3 @click="nextTag"
    v-if="current+max < tags.length">&gt;&gt;</h3>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        }
    },
    name: "DnlkkArraySlider",
    data() {
        return {
            current: 0,
            max: 3
        }
    },
    computed: {
        chosenTags() {
            return this.tags.filter((item, index) => {
                if (index >= this.current
                    && index < this.current + this.max)
                    return item
            })
        }
    },
    methods: {
        prevTag() {
            if (this.current !== 0)
                this.current--;
        },
        nextTag() {
            if (this.current + this.max < this.tags.length)
                this.current++;
        }
    }

}
</script>

<style scoped>
.tag-list .tag-item {
    display: inline-block;
    margin-right: 10px;
}

.tag-list-enter-active, .tag-list-leave-active {
    transition: all 0.4s ease;
}

.tag-list-enter-from, .tag-list-leave-to {
    opacity: 0;
    transform: translateX(150px);
}

.tag-list-move {
    transition: transform 0.4s ease;
}
</style>