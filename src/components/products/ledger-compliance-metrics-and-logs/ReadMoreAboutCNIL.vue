<template>
	<v-container class="mt-2 mt-md-10">
		<v-carousel
			v-model="slide"
			hide-delimiters
			:height="null"
			:class="{ white: isMdOrWider }"
			class="rounded-xl px-16 mb-n16"
		>
			<h4 class="rounded-xl brand--text text-uppercase text-center text-h4 font-weight-700 pt-md-10 pb-5">
				Read more about CNIL Metrics and Logs
			</h4>
			<v-carousel-item
				v-for="(currentSlide, currentSlideIndex) in slides"
				:key="currentSlide[0].title"
				class="carousel-item"
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
								cover
								height="195"
								class="rounded-xl blog-image"
							/>
							<v-sheet class="rounded-xl mt-n10 pt-4 pb-5 px-8" elevation="3">
								<p class="mb-0 text-center">
									<span class="rounded-lg bg-secondary dark-gray--text pa-2 d-inline-flex align-center">
										<v-icon color="dark-gray" small>
											{{ mdiCalendarRange }}
										</v-icon>&nbsp;
										{{ post.date }}
									</span>
								</p>
								<p class="brand--text text-center mb-0 text-truncate font-weight-700 mt-2">
									{{ post.title }}
								</p>
								<nuxt-link
									:to="post.path"
									tag="p"
									class="brand--text text-center mb-0 font-weight-700 cursor-pointer mt-3"
								>
									<span class="blog-link-text">
										Read the blog
									</span>
								</nuxt-link>
							</v-sheet>
						</v-col>
					</v-row>
				</v-container>
			</v-carousel-item>
			<div class="delimiters d-flex justify-center align-center mt-4 my-md-6 mb-0">
				<div
					v-for="(currentSlide, index) in slides"
					:key="currentSlide[0].title"
					:class="[index === slide ? 'accent' : 'info', { 'ml-2': index > 0 }]"
					class="delimiter rounded-xl cursor-pointer"
					@click="slide = index"
				/>
			</div>
		</v-carousel>
	</v-container>
</template>

<script>
import { chunk } from 'lodash';
import { mdiCalendarRange } from '@mdi/js';

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
			mdiCalendarRange,
			isMdOrWider: true,
		};
	},
	computed: {
		slides() {
			return chunk(this.blogPosts, this.perSlide);
		},
		perSlide() {
			return this.isMdOrWider
				? 3
				: 1;
		},
	},
	mounted() {
		window.addEventListener('resize', this.recalculateCurrentResolution);
		this.recalculateCurrentResolution();
	},
	methods: {
		recalculateCurrentResolution() {
			this.$nextTick(() => {
				const currentScreenWidth = window.innerWidth;

				this.isMdOrWider = currentScreenWidth >= this.$vuetify.breakpoint.thresholds.sm;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.blog {
	&-image {
		z-index: -1;
	}

	&-link-text {
		border-bottom: 3px solid var(--v-info-base);
	}
}

.carousel-item {
	height: initial;
}

.delimiter {
	height: 15px;
	width: 15px;
}
</style>
