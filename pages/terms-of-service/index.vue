<script>
import TosPageMixin from '@/mixins/TosPageMixin';
import { fetchTosPage } from '@/helpers/fetchTosPage';

export default {
    extends: TosPageMixin,
    asyncData: fetchTosPage('terms-of-service', 'index')
}
</script>
