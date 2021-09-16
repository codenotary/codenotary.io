<template>
	<v-container
		fluid
		class="lighter-gray"
	>
		<v-container>
			<v-carousel
				v-model="slide"
				hide-delimiters
				:height="null"
				class="rounded-xl white pt-10 px-15 pb-7 pb-md-9"
			>
				<h4 class="text-h4 text-uppercase brand--text font-weight-700 text-center">
					Immutable Ledger integrations
				</h4>
				<p class="dark--text text-center font-weight-400">
					Integrations for Hypervisor, Storage systems, OS and applications.

					{{ perSlide }}
				</p>
				<v-carousel-item
					v-for="(currentSlide, currentSlideIndex) in slides"
					:key="currentSlide[0].slug"
				>
					<v-container>
						<v-row>
							<v-col
								v-for="{ slug, image } in currentSlide"
								:key="`${slug}-${currentSlideIndex}`"
								cols="6"
								md="2"
								class="integration-item"
							>
								<nuxt-link :to="{ name: 'products-integration-post', params: { post: slug } }">
									<v-img
										:src="image"
										contain
									/>
								</nuxt-link>
							</v-col>
						</v-row>
					</v-container>
				</v-carousel-item>
				<div class="delimiters d-flex justify-center align-center mt-4 mt-md-6">
					<div
						v-for="(currentSlide, index) in slides"
						:key="currentSlide[0].slug"
						:class="[index === slide ? 'accent' : 'info', { 'ml-2': index > 0 }]"
						class="delimiter rounded-xl cursor-pointer"
						@click="slide = index"
					/>
				</div>
			</v-carousel>
		</v-container>
	</v-container>
</template>

<script>
import { chunk } from 'lodash';

export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsIntegrations',
	props: {
		integrations: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			slide: 0,
			perSlide: 0,
		};
	},
	computed: {
		slides() {
			return chunk(this.integrations, this.perSlide);
		},
	},
	mounted() {
		window.addEventListener('resize', this.recalculateCurrentIntegrations);
		this.recalculateCurrentIntegrations();
	},
	methods: {
		recalculateCurrentIntegrations() {
			this.$nextTick(() => {
				const currentScreenWidth = window.innerWidth;

				this.perSlide = currentScreenWidth >= this.$vuetify.breakpoint.thresholds.sm
					? 12
					: 8;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.integration-item {
	border-top: 1px solid var(--v-light-gray-base);
	border-left: 1px solid var(--v-light-gray-base);
	margin-top: -1px;
	margin-left: -1px;
}

.delimiter {
	height: 15px;
	width: 15px;
}
</style>
