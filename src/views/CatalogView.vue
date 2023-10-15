<script setup>
import MovieElement from '../components/MovieElement.vue';
import { usePopularMovies } from '../composables/movies';
import IconArrowRight from '../components/icons/IconArrowRight.vue';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';

const route = useRoute();
const page = ref(route.params.page.value ?? 1);
watch(
    () => route.params.page,
    () => {
        page.value = route.params.page
    }
)
let { data: movies_catalog }  = usePopularMovies(page);
</script>
<template>
    <main>
        <div class="catalog-wrapper">
            <h1>Popular movies</h1>
            <div class="catalog" v-if="movies_catalog">
                <MovieElement 
                    @vnode-mounted="mountedMovieElement"
                    @imageloaded="show"
                    class="movie-element"
                    v-for="(movie) in movies_catalog.results" 
                    :key="movie.id"
                    :movie_id="movie.id" 
                    :title="movie.title" 
                    :poster="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" 
                    :rating="movie.vote_average"
                    :link="`/movie/${movie.id}`"
                ></MovieElement>
                <MovieElement
                    :style="`--i: ${movies_catalog.results.length};`"
                    :link="'/' + ((route.params.page ? parseInt(route.params.page) : 1) + 1)"
                >
                    <IconArrowRight style="font-size: 2.5em;"></IconArrowRight>
                    <span style="margin-top: .5em;">Next page</span>
                </MovieElement>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    methods: {
        mountedMovieElement(e) {
            e.el.style.opacity = 0;
        },
        show(e){
            e.style.opacity = 1;
        }
    }
}
</script>
<style scoped>
main{
    margin: auto;
    padding: 2em 0 ;
    max-width: 1300px;
    width: 90%;
    display: flex;
    flex-direction: column;
}

.catalog-wrapper{
    display: flex;
    flex-direction: column;
    gap: 1em;

}

.catalog{
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

@media screen and (max-width: 1640px) {
    .catalog{
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width: 1240px) {
    .catalog{
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 960px) {
    .catalog{
        grid-template-columns: repeat(4, 1fr);
    }
}
@media screen and (max-width: 720px) {
    .catalog{
        grid-template-columns: repeat(3, 1fr);
    }
}
@media screen and (max-width: 540px) {
    .catalog{
        grid-template-columns: repeat(2, 1fr);
    }
}

.catalog > * {
    transition: .2s opacity .2s;
}
</style>