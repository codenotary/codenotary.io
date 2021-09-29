<template>
	<v-container class="mt-2 mt-md-10">
		<v-container
			fluid
			:class="{ white: isMdOrWider }"
			class="pa-0 rounded-xl"
		>
			<h4 class="rounded-xl brand--text text-uppercase text-center text-h4 font-weight-700 pt-md-10 pb-5">
				Read more about Metrics and Logs
			</h4>
			<v-carousel
				v-model="currentSlideIndex"
				hide-delimiters
				:height="null"
				:class="{ white: isMdOrWider }"
				class="rounded-xl px-16 mb-n12"
			>
				<v-carousel-item
					v-for="(slideItem, slideIndex) in slides"
					:key="slideItem[0].title"
					fade
					class="carousel-item"
				>
					<v-container fluid>
						<v-row>
							<v-col
								v-for="post in slideItem"
								:key="`${post.title}-${slideIndex}`"
								cols="12"
								md="4"
							>
								<v-img
									:src="fallbackImagePath"
									cover
									height="195"
									class="rounded-xl blog-image"
									style="margin-bottom: -195px;"
								/>
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
									<p class="brand--text text-center mb-0 font-weight-700 cursor-pointer mt-3">
										<a
											:href="`//codenotary.com${ post.path }`"
										>
											<span class="blog-link-text">
												Read the blog
											</span>
										</a>
									</p>
								</v-sheet>
							</v-col>
						</v-row>
					</v-container>
					<div class="delimiters d-flex justify-center align-center mt-4 my-md-6 mb-0">
						<div
							v-for="(item, index) in slides"
							:key="item[0].title"
							:class="[index === currentSlideIndex ? 'accent' : 'info', { 'ml-4': index > 0 }]"
							class="delimiter rounded-xl cursor-pointer"
							@click="currentSlideIndex = index"
						/>
					</div>
				</v-carousel-item>
			</v-carousel>
		</v-container>
	</v-container>
</template>

<script>
import { chunk } from 'lodash';
import { mdiCalendarRange } from '@mdi/js';

const fallbackImagePath = '/images/metrics-and-logs/Blog-Fallback.png';

export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsReadMoreAboutCNIL',
	props: {
		blogPosts: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			currentSlideIndex: 0,
			mdiCalendarRange,
			isMdOrWider: true,
			fallbackImagePath,
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
