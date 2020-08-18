<template>
    <div>
        <Contactbar/>
        <Navbar/>
        <nuxt/>
    </div>
</template>

<script>
import Contactbar from '~/components/layout/Contactbar';
import Navbar from '~/components/layout/Navbar';

export default {
    components: {
        Contactbar,
        Navbar
    }
}
</script>
