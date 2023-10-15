<script setup>
import IconHalfStar from './icons/IconHalfStar.vue';
import IconNoStar from './icons/IconNoStar.vue';
import IconStar from './icons/IconStar.vue';

defineProps({
    rating_hovered: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="rate-input">
        <span class="star" @mousemove="(e) => hover_star(e, n, this)" v-for="n in 5" :key="n">
            <IconStar v-if="n * 2 <= Math.round(rating)"></IconStar>
            <IconHalfStar v-else-if="n * 2 - 1 <= Math.round(rating)"></IconHalfStar>
            <IconNoStar v-else></IconNoStar>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rating: 0
        }
    },
    methods: {
        hover_star(event, i) {
            if(!event.target) return;
            const bounding_box = event.target.getBoundingClientRect();
            this.rating = (i * 2 - (event.clientX < bounding_box.x + bounding_box.width / 2 ? 1 : 0))
        }
    }
}
</script>

<style>
.rate-input{
    display: flex;
    cursor: pointer;
    color: rgb(215, 180, 55);
}
</style>