import { ref, watchEffect } from "vue";

export function useMovieDetails(movie_id){
    const data = ref(null);
    const error = ref(null);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTczMDQ2MGVkMGYwODM0YWYxN2ZkMzFhMDQwYjQwYyIsInN1YiI6IjYxN2RmZmQ0ZTc0MTQ2MDA4NGI0Nzg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPgIqfBNcSJK5WJRi7kzoSDzW7Z8DE3DYrpw1UwvIys'
        }
    };`
    `
    const fetchDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&append_to_response=release_dates`, options)
        .then(r => r.json())
        .then(json => data.value = json)
        .catch(err => error.value = err);
    }

    watchEffect(() => {
        fetchDetails();
    })

    return { data, error };
}

export function usePopularMovies(page){
    const data = ref(null);
    const error = ref(null);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTczMDQ2MGVkMGYwODM0YWYxN2ZkMzFhMDQwYjQwYyIsInN1YiI6IjYxN2RmZmQ0ZTc0MTQ2MDA4NGI0Nzg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPgIqfBNcSJK5WJRi7kzoSDzW7Z8DE3DYrpw1UwvIys'
        }
    };`
    `
    const fetchDetails = (page) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
        .then(r => r.json())
        .then(json => data.value = json)
        .catch(err => error.value = err);
    }

    watchEffect(() => {
        fetchDetails(page.value);
    })

    return { data, error };
}