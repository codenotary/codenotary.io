<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import TosPageMixin from '@/mixins/TosPageMixin';
import { fetchTosPage } from '@/helpers/fetchTosPage';
import { title } from '~/helpers/meta';

export default {
	extends: TosPageMixin,
	asyncData: fetchTosPage('terms-of-service'),
	head() {
		return {
			title: title('Terms of Service'),
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',
				light: true,
			});
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>
