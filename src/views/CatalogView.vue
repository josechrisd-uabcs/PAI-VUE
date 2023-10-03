<script setup>
import MovieElement from '../components/MovieElement.vue';

</script>
<template>
    <main>
        <div class="catalog-wrapper">
            <h1>Mejores peliculas de esta semana</h1>
            <div class="catalog">
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
                <MovieElement movie_id="565770" title="Blue beetle" poster="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg" rating="10"></MovieElement>
            </div>
        </div>
    </main>
</template>
<style>
main{
    margin: auto;
    padding-top: 2em;
    max-width: 1300px;
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
</style>