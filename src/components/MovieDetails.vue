<script setup>
import IconHalfStar from './icons/IconHalfStar.vue';
import IconStar from './icons/IconStar.vue';
import IconNoStar from './icons/IconNoStar.vue';

defineProps({
    title: {
        type: String,
        required: true,
    },
    backdrop: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    rating_count: {
        type: Number,
        required: true,
    },
    genres: {
        type: Array,
        required: true
    },
    runtime: {
        type: Number,
    },
    certification:{
        type: Object
    },
    abstract: {
        type: String,
        required: true,
        default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet pariatur cupiditate atque distinctio a. Eaque autem error adipisci accusamus expedita, praesentium doloribus. Quis rem laboriosam ratione ex explicabo officiis nemo quod totam placeat! Praesentium ratione laudantium quis voluptate accusantium? Quibusdam harum incidunt at sapiente, sit, magni odio explicabo autem quas exercitationem voluptates, fuga maiores nesciunt expedita fugit molestias? Aspernatur velit, eius enim possimus voluptatum architecto. Nemo velit repellat neque? Doloribus eum architecto, quae provident tempora delectus nulla, blanditiis sapiente quos nihil voluptates dolore unde dolor fugiat molestias praesentium atque ut debitis! Officia non, dolor suscipit nisi hic fugit impedit neque."
    }
})
</script>

<template>
    <div class="details-wrapper">
        <div class="img-wrapper">
            <img :src="backdrop">
        </div>
        <div class="container">
            <div class="movie-info">
                <h1>{{ title }}</h1>
                <div class="basic-info">
                    <span class="certification">{{ certification }}</span>
                    <span class="duration">{{ runtime_str  }}</span>
                    <i class="separation-dot"></i>
                    <span class="genre">{{ genres.join(' - ') }}</span>
                </div>
                <div class="rating" :title="`${rating.toFixed(1)}/10.0`">
                    <span class="star" v-for="n in 5" :key="n">
                        <IconStar v-if="n * 2 <= Math.round(rating)"></IconStar>
                        <IconHalfStar v-else-if="n * 2 - 1 <= Math.round(rating)"></IconHalfStar>
                        <IconNoStar v-else></IconNoStar>
                    </span>
                    <span class="reviews">({{ rating_count }} ratings)</span>
                </div>
            </div>

            <p class="abstract"> {{ abstract }} </p>

            <button type="button" class="rate">
                Rate it!
            </button>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        runtime_str() {
            return `${Math.floor(this.runtime / 60)}hr ${Math.floor(this.runtime % 60)}min`
        }
    }
}
</script>
<style scoped>
.img-wrapper, img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    object-position: right top;
}

.img-wrapper{
    display: flex;
    justify-self: flex-end;
    position: absolute;
    top: 0;
}

.img-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 25vw, rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%);   
}

.details-wrapper{
    display: grid;
    place-items: center;
    position: relative;
    min-height: 100vh;
}

.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
    width: 90%;
    max-width: 1280px;
    padding: 10em 0;
    position: relative;
    min-height: 100%;
}

h1{
    font-weight: lighter;
}
.movie-info{
    display: flex;
    flex-direction: column;
}

.certification{
    border: 1px solid #fff;
    padding: 0 .3em;
    font-size: 10px;
    margin-right: .5em;
}

.basic-info{
    display: flex;
    gap: .5em;
    align-items: center;
}

.separation-dot{
    display: block;
    width: .2em;
    height: .2em;
    border-radius: 50%;
    background-color: #fff;
}

.rating{
    display: flex;
    align-items: center;
}

.star{
    display: inline-flex;
}

.reviews{
    margin-left: .5em;
}

p{
    max-width: 520px;
    font-size: 13px;
}

.rate{
    padding: .5em;
    border-radius: .5em;
    border: 1px solid #eee;
    color: #eee;
    background-color: transparent;
    display: inline-flex;
    align-items: center;;
}

.rate:hover{
    background-color: #eee;
    color: #555;
}

.rate:active{
    border-color: #aaa;
    background-color: #aaa;
    color: #555;
}

@media screen and (max-width: 1720px) {
    img{
        object-fit: cover;
    }
}

@media screen and (max-width: 1080px) {
    .img-wrapper, img{
        height: auto;
        position: relative;
    }
    
    .img-wrapper::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 25vw, rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%);   
        background: rgba(31.5, 31.5, 31.5, 0.50);   
    }

    .details-wrapper{
        min-height: unset;
        display: flex;
        flex-direction: column;
    }
    .container{
        width: 80%;
        padding: 2em 0;
    }
}
</style>