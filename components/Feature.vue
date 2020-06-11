<template>
    <i-column class="feature">
        <img class="image -responsive" :src="image" :alt="title" />
        <h4>{{title}}</h4>
        <p><slot/></p>
    </i-column>
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
            }
        }
    }
</script>

<style lang="scss">
.feature{
    text-align: center;
    img {
        width: 80px;
        height: auto;
        display: block;
        margin: 0 auto;
    }
}
</style>
