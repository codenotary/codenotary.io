<script>
import { addClass, removeClass } from '@inkline/inkline/src/helpers';

export default {
    beforeRouteEnter(from, to, next) {
        if (typeof window !== 'undefined') {
            addClass(document.body, 'iframe-body');
        }
        next();
    },
    beforeRouteLeave(from, to, next) {
        if (typeof window !== 'undefined') {
            removeClass(document.body, 'iframe-body');
        }
        next();
    }
}
</script>
