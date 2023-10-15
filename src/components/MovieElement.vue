<script setup>
import { RouterLink } from 'vue-router';
import IconStar from './icons/IconStar.vue';
import IconHalfStar from './icons/IconHalfStar.vue';
import IconNoStar from './icons/IconNoStar.vue';

defineProps({
    poster: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    movie_id: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        required: true
    }
})
</script>

<template>
    <RouterLink class="container" :to="link">
        <slot>
            <div class="img-wrapper">
                <img :src="poster" @load="$emit('imageloaded', $el)" :alt="`${title}'s movie image'`">
            </div>
            <div class="top-wrapper">
                <div class="movie-info">
                    <span class="title">{{ title }}</span>
                    <span class="rating-text">
                        <span class="star" v-for="n in 5" :key="n">
                            <IconStar v-if="n * 2 <= Math.round(rating)"></IconStar>
                            <IconHalfStar v-else-if="n * 2 - 1 <= Math.round(rating)"></IconHalfStar>
                            <IconNoStar v-else></IconNoStar>
                        </span>
                    </span>
                </div>
            </div>
        </slot>
    </RouterLink>
</template>

<style scoped>
    .container{
        width: 100%;
        overflow: hidden;
        border-radius: .5em;
        aspect-ratio: 2 / 3;
        position: relative;
        background-color: #1b1a2c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: inherit;
        color: inherit;
    }
    .img-wrapper, img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .top-wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .movie-info{
        height: 5em;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #2f2d51aa;
        backdrop-filter: blur(3px);
        color: #fff;
        box-sizing: border-box;
        padding: .5em 1em;
        display: flex;
        border-radius: 0 0 .5em .5em;
        overflow: hidden;
        flex-direction: column;
    }

    .title{
        font-weight: bold;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .rating-text{
        color: #ee0;
    }
</style>