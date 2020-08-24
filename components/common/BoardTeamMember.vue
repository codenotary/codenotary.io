<template>
    <div class="board-team-member">
        <h4 class="title">{{ name }}</h4>
        <span>{{ position }}</span>
    </div>
</template>

<script>
export default {
    name: 'BoardTeamMember',
    props: {
        name: {
            type: String,
            default: ''
        },
        position: {
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
@import "~@inkline/inkline/src/css/config";

.board-team-member {
    text-align: center;

    .title {
        font-weight: bold;
        font-size: 24px;
        color: $color-primary;
        margin: 1rem 0 0.5rem;
    }
}
</style>
