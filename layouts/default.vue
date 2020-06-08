<template>
    <div>
        <Contactbar/>
        <Navbar/>
        <nuxt/>
    </div>
</template>

<script>
import Contactbar from '../components/Contactbar';
import Navbar from '~/components/Navbar';

export default {
    components: {
        Contactbar,
        Navbar
    }
}
</script>
