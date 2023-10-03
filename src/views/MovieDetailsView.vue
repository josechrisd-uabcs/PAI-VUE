<script setup>
import { useMovieDetails } from '../composables/movies';
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: movie_details  } = useMovieDetails(route.params.movie_id)
</script>
<template>
    Pelicula
    {{ movie_details }}
</template>