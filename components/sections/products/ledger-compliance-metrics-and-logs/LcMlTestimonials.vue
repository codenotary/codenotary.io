<template>
	<PageSection
		id="lc-testimonials-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="Client testimonials" :bottom="4" />
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<VueSlickCarousel v-bind="settings">
						<div>
							<i-card>
								<fa icon="quote-left" class="fa-2x _text-center" />
								<p class="quote">
									It makes for a great one-stop shop for monitoring key VMware metrics! I have been using CodeNotary CNIL Metrics and Logs for about a year. Setup and operational in less than 30 minutes. It comes pre-packaged with ready to use dashboards that are color coded with thresholds providing immediate feedback on performance, KPIs, health and areas of concerns. The team is skilled in this area and knows what their customer base is seeking. Overall, I’m very pleased with the application and the support team behind it. Highly recommended!
								</p>
								<hr>
								<span class="name _font-weight-bold">Tarun Keswani</span>
								<small class="role">Principal Staff Engineer</small><small>, </small><small class="organization">Motorola Solutions</small>
							</i-card>
						</div>
						<div>
							<i-card>
								<fa icon="quote-left" class="fa-2x _text-align-center" />
								<p class="quote">
									The tremendous flexibility and and the possibility to create your own dashboards with the metrics you want to keep one eye on it all the time across different infrastructure products from different vendors.
								</p>
								<p class="quote">
									Also I like the very great support from the Performance Analyzer team!
								</p>
								<hr>
								<span class="name _font-weight-bold">Jan Unger</span>
								<small class="role">Network and Datacenter Engineer</small><small>, </small><small class="organization">Netcloud AG</small>
							</i-card>
						</div>
						<div>
							<i-card>
								<fa icon="quote-left" class="fa-2x _text-align-center" />
								<p class="quote">
									While looking for a suitable monitoring, analysis and troubleshooting product for our VMware vSphere infrastructure, we found Performance Analyzer. We were impressed by the flexibility and ease of deployment of the virtual appliance and the nearly instant time to value.
								</p>
								<hr>
								<span class="name _font-weight-bold">Millie Cruz</span>
								<small class="role">Network Administrator</small><small>, </small><small class="organization">American College of Surgeons</small>
							</i-card>
						</div>
						<div>
							<i-card>
								<fa icon="quote-left" class="fa-2x _text-align-center" />
								<p class="quote">
									We receive all key indicators at a glance and no longer have to gather the information in various systems.
								</p>
								<hr>
								<small class="role _font-weight-bold">Team Lead IT Platforms</small><small>, </small><small class="organization">3rd largest Bank in Germany</small>
							</i-card>
						</div>
						<div>
							<i-card>
								<fa icon="quote-left" class="fa-2x _text-align-center" />
								<p class="quote">
									Performance Analyzer was running in 25 minutes. CodeNotary CNIL Metrics and Logs has provided us with insights into our VMware cluster performance that we have never previously had and immediately alerted us to several issues we were unaware of.
								</p>
								<hr>
								<small class="role _font-weight-bold">Head of Information Systems</small><small>, </small><small class="organization">Brett Martin Ltd</small>
							</i-card>
						</div>
					</VueSlickCarousel>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'LcMlHowItWorks',
	data: () => ({
		settings: {
			slidesToShow: 3,
			arrows: true,
			dots: true,
			focusOnSelect: true,
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		},
	}),
	beforeDestroy () {
		this.settings = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-testimonials-section {
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: 96px;
			object-fit: contain;
		}

		.body {
			border: none;
			text-align: left;
		}

		.quote {
			font-size: 18px;
			font-weight: 200;
		}

		.name {
			display: flex;
			font-size: 14px;
		}

		.role {
			font-size: 12px;
		}

		.organization {
			font-size: 12px;
		}
	}

	.slick-arrow {
		opacity: 0.55;

		&::before {
			background: transparent;
			color: #333;
		}

		&:hover {
			opacity: 1;
		}
	}
}
</style>
