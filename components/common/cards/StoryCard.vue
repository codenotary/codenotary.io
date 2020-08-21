<template>
    <div :class="`story-card _background-${variant}`">
        <img class="image -responsive" :src="image" :alt="title">
        <h5>{{ title }}</h5>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: {
        title: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'dark'
        }
    }
}
</script>

<style lang="scss">
.story-card {
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 4px;

    /* &:hover {
        opacity: 0.9;
    } */

    img {
        width: 80px;
        height: auto;
        display: block;
        margin: 0 auto;
    }

    h3,
    h4,
    h5 {
        font-weight: bold;
        color: white;
        margin: 1rem 0 0;
    }
}
</style>
