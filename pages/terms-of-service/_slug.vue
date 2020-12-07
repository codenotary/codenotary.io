<script>
import TosPageMixin from '@/mixins/TosPageMixin';
import { fetchTosPage } from '@/helpers/fetchTosPage';
import { title } from '~/helpers/meta';

export default {
    extends: TosPageMixin,
    asyncData: fetchTosPage('terms-of-service'),
    head() {
        return {
            title: title('Terms of Service')
        };
    }
}
</script>
