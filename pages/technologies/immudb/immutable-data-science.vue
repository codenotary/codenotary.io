<template>
	<!-- <PageSection>
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader class="_text-left _margin-left-0 _margin-bottom-2">
						<h1 slot="title">
							Immutable Data Science
						</h1>
					</PageSectionHeader>
					<div class="ppp-info-alert">
						<p>
							We are the developers of <nuxt-link :to="{ name: 'technologies-immudb' }">
								immudb
							</nuxt-link>, an Open Source immutable database for systems and applications. Given the immutability of anything that is stored inside our immudb database, we think that it can be a valuable platform to store sensitive data important to current political or social discourse, so that data scientists can then get insight from data without fear of partisan or malevolent meddling with the core datasets. We started with the US federal government PPP dataset but we will add more in the future. Our service is free for all to use.
						</p>
					</div>
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<PageSectionHeader class="_text-left _margin-left-0 _margin-bottom-0 _margin-top-4">
						<h2 slot="title">
							Immutable Datasets
						</h2>
					</PageSectionHeader>
				</i-column>
			</i-row>
			<i-row class="_margin-bottom-2">
				<i-column>
					<i-card class="link-card">
						<fa class="icon" icon="chevron-right" />
						<a class="_overlay-link" href="https://ppp.immudb.io"><strong>U.S. Federal Reserve Payment Protection Program</strong></a>
					</i-card>
				</i-column>
			</i-row>
		</i-container>
	</PageSection> -->
	<div>
		<div class="immutable-data-science-header-container">
			<i-header
				id="immutable-data-science-header"
				size="sm"
			>
				<i-row class="_align-items-center main-content">
					<i-column>
						<h1 class="title">
							Immutable Data Science
						</h1>
					</i-column>
				</i-row>
			</i-header>
			<client-only>
				<div class="gradient-box" />
				<div class="secondary-box" :style="computedStyle" />
			</client-only>
		</div>
		<div class="immutable-data-science-description-container">
			<div class="immutable-data-science-description">
				<div class="line" />
				<div class="content">
					We are the developers of
					<a
						class="immudb-link"
						href="https://docs.immudb.io/"
						target="_blank"
						rel="nofollow"
					>immudb</a>, an Open Source immutable database for systems and applications.
					Given the immutability of anything that is stored inside our immudb database,
					we think that it can be a valuable platform to store sensitive data important
					to current political or social discourse, so that data scientists can then get
					insight from data without fear of partisan or malevolent meddling with the core
					datasets. We started with the US federal government PPP dataset but we will
					add more in the future. Our service is free for all to use.
				</div>
			</div>
		</div>
		<div class="immutable-data-science-immutable-datasets-container">
			<div class="immutable-data-science-immutable-datasets">
				<h2 class="title">
					Immutable Datasets
				</h2>
				<a
					href="https://ppp.immudb.io/"
					target="_blank"
					rel="nofollow"
					class="protection-program-link"
				>
					<span>U.S. Federal Reserve Payment Protection Program</span>
					<fa class="icon" icon="chevron-right" />
				</a>
			</div>
		</div>
		<LazyHydrate when-visible>
			<NewsletterSection class="newsletter" />
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

import { title } from '~/helpers/meta';

export default {
	name: 'ImmutableDataScience',
	components: { LazyHydrate },
	data() {
		return {
			rightBarBottom: '0px',
		};
	},
	head() {
		return {
			title: title('Blog'),
		};
	},
	computed: {
		computedStyle() {
			return {
				bottom: this.rightBarBottom,
			};
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-height: 164px;
$mascot-height-small: 100px;

#immutable-data-science-header {
	background: transparent;
	z-index: 3;
	position: relative;

	.title {
		margin: 0;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
	}
}

::v-deep #immutable-data-science-header {
	overflow-x: hidden;
	width: 100%;

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 6rem;
		text-align: center;
	}
}

.immutable-data-science-header-container {
	position: relative;
	background-color: $cn-color-background;
}

// Oblique box on the bottom
.gradient-box {
	width: 100vw;
	max-width: 100%;
	height: 150%;
	position: absolute;
	bottom: 100px;
	left: 0;
	transform: skewY(-5deg);
	-webkit-transform-origin: right;
	z-index: 2;
	box-shadow: 3px 10px 10px -10px rgba(0, 0, 0, 0.15); // Custom bottom-only shadow
	overflow: hidden;
	transition: transform 0.5s linear, bottom 0.5s linear;

	@media screen and (min-width: 2800px) {
		transform: skewY(-2deg);

		&::after {
			transform: skewY(2deg);
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		transform: skewY(-8deg);
		bottom: 130px;

		&::after {
			transform: skewY(8deg);
		}
	}

	&::after {
		content: '';
		background: $cn-dark-gradient;
		transform: skewY(5deg);
		width: 100%;
		height: 200%;
		position: inherit;
	}
}

.secondary-box {
	background-color: $cn-color-secondary;
	width: 100%;
	position: absolute;
	right: 0;
	height: 100%;
	-webkit-transform-origin: right;
	transform: skewY(3deg);
	z-index: 1;
	box-shadow: $cn-shadow-sm;
	transition: transform 0.5s linear, bottom 0.5s linear;

	@media screen and (min-width: 2800px) {
		transform: skewY(1deg);
	}

	@media screen and (max-width: $mobile-max-width) {
		transform: skewY(5deg);
		bottom: 30px !important;
	}
}

.main-content {
	z-index: 3;

	@media screen and (max-width: $mobile-max-width) {
		padding-top: 16px;
	}
}

.immutable-data-science-description-container {
	background: $cn-color-background;
	padding: 20px 30px 0;

	.immutable-data-science-description {
		display: flex;
		margin: 0 auto;
		align-content: center;
		padding: 32px;
		background: $cn-color-dark;
		max-width: 740px;
		border-radius: 30px;

		.line {
			width: 30px;
			border-radius: 10px;
			background: $cn-color-primary_dark;
			margin-right: 20px;
			align-self: stretch;
		}

		.content {
			color: $cn-color-grey;
			font-size: 16px;
			line-height: 19px;

			.immudb-link {
				color: $cn-color-primary;
				font-weight: 700;
			}
		}
	}
}

.immutable-data-science-immutable-datasets-container {
	background: $cn-color-background;
	padding: 30px;
	text-align: center;

	.immutable-data-science-immutable-datasets {
		.title {
			margin: 0;
			color: $cn-color-brand;
			font-size: 24px !important;
			font-weight: 700;
			padding-bottom: 10px;
		}

		.protection-program-link {
			background: $cn-light-gradient;
			box-shadow: $cn-shadow-sm;
			padding: 10px 20px;
			border-radius: 8px 30px 30px 8px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 740px;
			margin: 0 auto;

			.icon {
				color: $cn-color-primary;
				font-size: 20px;
			}
		}
	}
}

.newsletter {
	margin: 0 !important;
}
</style>
