<template>
	<PageSection
		class="footer _padding-top-xs-2 _padding-left-xs-1 _padding-right-xs-1"
		:top="3"
		:bottom="2"
	>
		<i-container>
			<i-row>
				<i-column class="brand"
				>
					<img
						class="logo"
						src="/images/logo/logo_white.png"
						alt="CodeNotary"
					>
					<p class="brand-description">
                                                We bring trust and integrity into the software life cycle 
                                                by providing end-to-end cryptographically verifiable tracking and provenance 
                                                for all artifacts, actions, and dependencies. 
						The only immutable and client-verifiable solutions capable of processing millions of transactions a
						second.
					</p>
					<ul class="social-links list -inline">
						<li>
							<a href="https://github.com/codenotary">
								<fa :icon="['fab', 'github-square']" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/CodeNotary">
								<fa :icon="['fab', 'twitter-square']" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/Codenotary-Inc-106257094666687">
								<fa :icon="['fab', 'facebook-square']" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/codenotary/">
								<fa :icon="['fab', 'linkedin']" />
							</a>
						</li>
					</ul>
				</i-column>
				<i-column class="table" v-for="(table, index) in content.footer.tables" :key="index">
					<p class="table_title _font-weight-bold"> {{ table.title }} </p>
					<div v-for="(link, linkIndex) in table.links" :key="linkIndex">
						<nuxt-link v-if="link.internalLink" class="table_link" :to="link.internalLink">
							{{ link.label }}
						</nuxt-link>
						<a v-else class="table_link" :href="link.href">
							{{ link.label }}
						</a>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'Footer',
	data() {
		return {
			content: homepage,
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.footer {
	background-color: $cn-color-primary !important;

	.logo {
		height: 64px;
		width: auto;
	}

	p {
		color: white !important;

		&.brand-description {
			color: $cn-color-primary_light !important;
		}
	}

	a {
		color: $color-gray-30;

		&:hover,
		&:active {
			color: $color-primary-lightest;
		}
	}

	li {
		margin-bottom: $spacer;
	}

	.social-links {
		font-size: 32px;
	}

	.table {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		flex: 0 0 200px;
		line-height: 19px;
		margin-top: 32px;

		& > * {
			margin: 7px 0 0;
			width: 100%;
		}

		.table_title {
			margin-bottom: 2px;
		}

		.table_link {
			color: $cn-color-primary_light !important;
		}
	}

	@media (max-width: 1024px) {
		.brand {
			flex: 1 0 100%;
		}
	}
}
</style>
