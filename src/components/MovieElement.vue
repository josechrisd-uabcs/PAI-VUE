<script setup>
import { RouterLink } from 'vue-router';

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
    }
})
</script>

<template>
    <RouterLink class="container" :to="`/movie/${movie_id}`">
        <div class="img-wrapper">
            <img :src="poster" :alt="`${title}'s movie image'`">
        </div>
        <div class="top-wrapper">
            <div class="movie-info">
                <span class="title">{{ title }}</span>
                <span class="rating-text">Rating: {{ rating * 10 }}%</span>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
    .container{
        width: 100%;
        overflow: hidden;
        border-radius: 1.5em;
        aspect-ratio: 2 / 3;
        position: relative;
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
        border-radius: 0 0 1.5em 1.5em;
        overflow: hidden;
        flex-direction: column;
    }

    .title{
        font-weight: bold;
    }
</style>