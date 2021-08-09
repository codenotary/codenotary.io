<template>
	<PageSection
		id="cnil-around-the-world-section"
		:top="8"
		:bottom="8"
	>
		<h3 class="_font-weight-bold cn-text-white _text-uppercase _text-center">
			CNIL Cloud Around The World
		</h3>
		<div class="stats _display-flex _justify-content-center _align-items-center">
			<div
				v-for="stat in statistics"
				:key="stat.label"
				class="stat _display-flex _flex-direction-column _align-items-center"
			>
				<img
					:src="stat.image"
					:alt="stat.label"
					class="image stat-image"
				>
				<p class="stat-count" :class="stat.primaryColor">
					{{ stat.count | commaDelimeter }}
				</p>
				<p class="stat-label cn-text-white _text-uppercase">
					{{ stat.label }}
				</p>
			</div>
		</div>
	</PageSection>
</template>

<script>
// import axios from 'axios';

export default {
	name: 'CNILAroundTheWorldSection',
	filters: {
		commaDelimeter(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
	data() {
		return {
			downloads: {
				label: 'Downloads',
				count: 5043476,
				image: '/images/downloads.png',
				primaryColor: 'light-green',
			},
			notarizations: {
				label: 'Notarizations',
				count: 910693,
				image: '/images/notarizations.png',
				primaryColor: 'green',
			},
			authentications: {
				label: 'Authentications',
				count: 223020890,
				image: '/images/authentications.png',
				primaryColor: 'blue',
			},
		};
	},
	// async fetch() {
	// 	const { data } = await axios.get('https://us-east1-vchain-ops.cloudfunctions.net/fn-stats');
	// 	const { totalAuth, totalNotar } = data;

	// 	this.notarizations.count = totalNotar;
	// 	this.authentications.count = totalAuth;
	// },
	computed: {
		statistics() {
			return [this.downloads, this.notarizations, this.authentications];
		},
	},
};
</script>

<style lang="scss" scoped>
#cnil-around-the-world-section {
	background: $cn-dark-gradient_inverse;

	h3 {
		margin: 0;
		margin-bottom: 20px;
		font-size: 32px !important;
		font-weight: 700 !important;

		@media screen and (max-width: $mobile-max-width) {
			font-size: 24px !important;
			line-height: 26px !important;
		}
	}

	.stats {
		@media screen and (max-width: $mobile-max-width) {
			flex-direction: column;
		}

		.stat {
			&-image {
				max-width: 200px;
			}

			&-count {
				font-weight: 700;
				font-size: 32px;

				&.light-green {
					color: #54eab4;
				}

				&.green {
					color: #24c4a1;
				}

				&.blue {
					color: #36d6d0;
				}
			}

			&-label {
				font-weight: 400;
				font-size: 24px;
			}

			p {
				margin: 0;
			}
		}

		.stat + .stat {
			margin-left: 60px;

			@media screen and (max-width: $mobile-max-width) {
				margin-left: 0;
				margin-top: 20px;
			}
		}
	}
}
</style>
