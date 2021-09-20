<template>
	<v-container
		fluid
		class="lighter-gray"
	>
		<v-container class="mb-n16">
			<v-container
				fluid
				class="pa-0 pt-10 white rounded-xl"
			>
				<h4 class="text-h4 text-uppercase brand--text font-weight-700 text-center">
					Immutable Ledger integrations
				</h4>
				<p class="dark--text text-center font-weight-400">
					Integrations for Hypervisor, Storage systems, OS and applications.
				</p>
				<v-carousel
					v-model="currentSlideIndex"
					hide-delimiters
					:height="null"
					class="rounded-xl white px-15 pb-7 pb-md-9 mb-n10"
				>
					<v-carousel-item
						v-for="(slideItem, slideIndex) in slides"
						:key="slideItem[0].slug"
					>
						<v-container>
							<v-row>
								<v-col
									v-for="{ slug, image } in slideItem"
									:key="`${slug}-${slideIndex}`"
									cols="6"
									md="2"
									class="integration-item pa-8"
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
						<div class="delimiters d-flex justify-center align-center mt-4 mt-md-6">
							<div
								v-for="(item, index) in slides"
								:key="item[0].slug"
								:class="[index === currentSlideIndex ? 'accent' : 'info', { 'ml-4': index > 0 }]"
								class="delimiter rounded-xl cursor-pointer"
								@click="currentSlideIndex = index"
							/>
						</div>
					</v-carousel-item>
				</v-carousel>
			</v-container>
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
			currentSlideIndex: 0,
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
	margin-top: -2px;
	margin-left: -2px;
}

.delimiter {
	height: 15px;
	width: 15px;
}
</style>
