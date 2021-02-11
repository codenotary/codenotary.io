import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

class AosPlugin {
	config = {
		disable: 'mobile',
		delay: 30,
		duration: 300,
		easing: 'ease-in-back',
		offset: 0,
		// once: true,
	};

	install(Vue) {
		AOS.init(this.config);

		Vue.mixin({
			updated() {
				this.$nextTick(() => {
					AOS.refreshHard();
				});
			},
		});
	}
}

Vue.use(new AosPlugin());
