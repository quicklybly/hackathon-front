<template>
    <div class="contain">
        <h3 @click="prevTag"
            v-if="current > 0"
            class="clickable">&lt;&lt;</h3>
        <transition-group name="tag-list">
            <div class="tag-item"
                 v-for="tag in chosenTags"
            @click="remove(tag)">
                {{ tag }}
            </div>
        </transition-group>
        <h3 @click="nextTag"
            class="clickable"
            v-if="current+max < tags.length">&gt;&gt;</h3>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        },
        isRemovable: {
            type: Boolean,
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
        },
        remove(tag) {
            if (this.isRemovable) this.$emit('remove', tag)
        }
    }

}
</script>

<style scoped>
.tag-item {
	border: 1px solid black;
	border-radius: 50%;
	align-self: center;
	padding: 2px 5px;
	margin: 0 10px;
}

.clickable {
	cursor: pointer;
    margin: 0;
}

.contain{
    display: flex;
}

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