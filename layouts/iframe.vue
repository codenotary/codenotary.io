<template>
    <div>
        <Navbar id="navbar" />
        <div id="content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar';

export default {
    components: {
        Navbar
    }
}
</script>
