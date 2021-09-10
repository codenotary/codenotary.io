<template>
	<PageSection
		class="footer"
		:top="3"
		:bottom="2"
	>
		<i-container>
			<i-row>
				<i-column class="brand">
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
				<i-column
					v-for="(table, index) in content.footer.tables"
					:key="index"
					class="table"
				>
					<p class="table_title _font-weight-bold">
						{{ table.title }}
					</p>
					<div
						v-for="(link, linkIndex) in table.links"
						:key="linkIndex"
					>
						<nuxt-link
							v-if="link.internalLink"
							class="table_link"
							:to="link.internalLink"
						>
							{{ link.label }}
						</nuxt-link>
						<a
							v-else
							class="table_link"
							:href="link.href"
							:target="link.target"
						>
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
	background-color: $cn-color-dark !important;
	border-top: 1px solid $cn-color-light;
	padding-top: 40px;
	padding-bottom: 40px;

	.logo {
		height: 40px;
		width: auto;
	}

	p {
		color: white !important;

		&.brand-description {
			color: $cn-color-primary !important;
			max-width: 340px;
			font-size: 14px;
			line-height: 17px;
		}
	}

	a {
		color: $color-gray-30;

		&:hover,
		&:active {
			color: $color-primary-light;
		}
	}

	li {
		margin-bottom: $spacer;
	}

	.social-links {
		font-size: 30px;
		margin-bottom: 0;

		li {
			margin-right: 4px !important;
		}
	}

	.table {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		flex: 0 0 200px;
		line-height: 19px;
		margin-top: 18px;

		& > * {
			margin: 7px 0 0;
			width: 100%;
		}

		.table_title {
			margin-bottom: 2px;
			font-size: 18px;
			margin-top: 0;
			line-height: 22px;
		}

		.table_link {
			color: $cn-color-primary !important;
			font-size: 14px;
			line-height: 17px;

			&:hover {
				color: $cn-color-secondary !important;
			}
		}
	}

	@media (max-width: $mobile-max-width) {
		.brand {
			display: flex;
			flex-direction: column;
			flex: 1 0 100%;
			justify-content: center;
			align-items: center;
			text-align: center;

			.brand-description {
				max-width: unset;
			}
		}
	}
}
</style>
