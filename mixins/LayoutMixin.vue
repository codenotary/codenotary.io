<script>
import { mapActions } from 'vuex';
import { VIEW_MODULE, SET_MOBILE } from '@/store/view/constants';

export default {
    name: 'LayoutMixin',

    mounted () {
        this.onResize();

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResize, { passive: true });
        }
    },

    beforeDestroy () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, { passive: true });
        }
    },

    methods: {
        ...mapActions(VIEW_MODULE, {
            setMobile: SET_MOBILE
        }),
        onResize () {
            this.setMobile(window.innerWidth < 600);
        }
    }
};
</script>
