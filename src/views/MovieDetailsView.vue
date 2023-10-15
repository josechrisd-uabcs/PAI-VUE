<script setup>
import MovieDetails from '../components/MovieDetails.vue';
import { useMovieDetails } from '../composables/movies';
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: movie_details  } = useMovieDetails(route.params.movie_id)
</script>
<template>
    <MovieDetails v-if="movie_details" 
        :rating="movie_details.vote_average"
        :rating_count="movie_details.vote_count"
        :runtime="movie_details.runtime" 
        :title="movie_details.title" 
        :abstract="movie_details.overview" 
        :genres="movie_details.genres.map(e => e.name)"
        :backdrop="`https://image.tmdb.org/t/p/original/${movie_details.backdrop_path}`"
        :certification="movie_details.release_dates.results.find(e => e.iso_3166_1 == 'US')?.release_dates?.find(e => e.certification)?.certification ?? ''"
    ></MovieDetails>
</template>