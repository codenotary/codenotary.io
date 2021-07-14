<template>
	<UiPageSection
		class="footer"
		:top="3"
		:bottom="2"
	>
		<v-container>
			<v-row>
				<v-col class="brand">
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
				</v-col>
				<v-col
					v-for="(table, index) in content.footer.tables"
					:key="index"
					class="table"
				>
					<p class="table_title font-weight-bold">
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
						>
							{{ link.label }}
						</a>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'TheFooter',
	data() {
		return {
			content: homepage,
		};
	},
};
</script>

<style lang="scss">
.footer {
	background-color: var(--v-primary-darken3) !important;
	padding-top: 40px;
	padding-bottom: 40px;

	.logo {
		height: 40px;
		width: auto;
	}

	p {
		color: white !important;

		&.brand-description {
			color: var(--v-primary-darken3) !important;
			max-width: 340px;
			font-size: 14px;
			line-height: 17px;
		}
	}

	a {
		color: var(--v-grey-lighten1);

		&:hover,
		&:active {
			color: var(--v-primary--lighten3);
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
			color: var(--v-accent-base) !important;
			font-size: 14px;
			line-height: 17px;

			&:hover {
				color: var(--v-secondary-base) !important;
			}
		}
	}

	@media (max-width: $xs) {
		.brand {
			display: flex;
			flex-direction: column;
			flex: 1 0 100%;
			justify-content: center;
			align-items: center;

			.brand-description {
				max-width: unset;
			}
		}
	}
}
</style>
