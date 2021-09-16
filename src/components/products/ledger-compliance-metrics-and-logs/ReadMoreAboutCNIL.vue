<template>
	<v-container>
		<h4 class="rounded-xl brand--text text-uppercase text-center text-h4 font-weight-700 pt-6 pb-14">
			Read more about CNIL Metrics and Logs
		</h4>
		<v-carousel
			v-model="slide"
			hide-delimiters
			:height="null"
			class="rounded-xl white"
		>
			<v-carousel-item
				v-for="(currentSlide, currentSlideIndex) in slides"
				:key="currentSlide[0].title"
			>
				<v-container fluid>
					<v-row>
						<v-col
							v-for="post in currentSlide"
							:key="`${post.title}-${currentSlideIndex}`"
							cols="12"
							md="4"
						>
							<v-img
								:src="post.image"
								contain
								class="rounded-xl"
							/>
							<v-sheet class="rounded-xl d-flex flex-column align-center" elevation="3">
								<span>{{ post.date }}</span>
								<span class="brand--text text-center">
									{{ post.title }}
								</span>
								<nuxt-link
									:to="post.path"
									class="brand--text"
								>
									Read the blog
								</nuxt-link>
							</v-sheet>
						</v-col>
					</v-row>
				</v-container>
			</v-carousel-item>
			<div class="delimiters d-flex justify-center align-center mt-4 mt-md-6">
				<div
					v-for="(currentSlide, index) in slides"
					:key="currentSlide[0].title"
					:class="[index === slide ? 'accent' : 'info', { 'ml-1': index > 0 }]"
					class="delimiter rounded-xl cursor-pointer"
					@click="slide = index"
				/>
			</div>
		</v-carousel>
	</v-container>
</template>

<script>
import { chunk } from 'lodash';

export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsReadMoreAboutCNIL',
	props: {
		blogPosts: {
			type: Array,
			required: true,
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
			return chunk(this.blogPosts, this.perSlide);
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
					? 3
					: 1;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.delimiter {
	height: 15px;
	width: 15px;
}
</style>
