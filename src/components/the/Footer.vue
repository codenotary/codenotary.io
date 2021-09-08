<template>
	<!-- <UiPageSection
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
	</UiPageSection> -->
	<v-container fluid class="dark">
		<v-container>
			<v-row>
				<v-col
					cols="12"
					md="4"
				>
					<v-img
						src="/images/logo/logo_white.png"
						contain
						height="40"
						position="left center"
						class="d-none d-md-block"
					/>
					<v-img
						src="/images/logo/logo_white.png"
						contain
						height="40"
						class="d-md-none"
					/>
					<p class="accent--text ma-0 font-weight-400">
						We bring trust and integrity into the software life cycle by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies. The only immutable and client-verifiable solutions capable of processing millions of transactions a second.
					</p>
					<div class="d-flex justify-md-start justify-center social-holder">
						<a
							v-for="({ link, icon }, index) in socials"
							:key="icon"
							:href="link"
							target="_blank"
							rel="nofollow noopener"
							:class="{ 'ml-3': index > 0 }"
						>
							<v-img
								:src="`/images/metrics-and-logs/social/${icon}.svg`"
								contain
							/>
						</a>
					</div>
				</v-col>
				<v-col
					cols="12"
					md="3"
					class="pa-0"
				/>
				<v-col
					cols="12"
					md="5"
				>
					<v-container fluid>
						<v-row>
							<v-col
								v-for="{ title, items } in navigation"
								:key="title"
								cols="6"
								md="4"
								class="d-flex flex-column align-start"
							>
								<h4 class="white--text font-weight-700 text-uppercase">
									{{ title }}
								</h4>
								<template v-for="{ text, to = null, link = null } in items">
									<v-hover
										:key="text"
										v-slot="{ hover }"
									>
										<nuxt-link
											v-if="link === null"
											:to="to"
											:class="hover ? 'secondary--text text-decoration-underline' : 'accent--text'"
										>
											{{ text }}
										</nuxt-link>
										<a
											v-else
											:href="link"
											target="_blank"
											rel="nofollow noopener"
											:class="hover ? 'secondary--text text-decoration-underline' : 'accent--text'"
										>
											{{ text }}
										</a>
									</v-hover>
								</template>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'TheFooter',
	data() {
		return {
			content: homepage,
			socials: [
				{
					link: 'https://github.com/codenotary',
					icon: 'github',
				},
				{
					link: 'https://twitter.com/CodeNotary',
					icon: 'twitter',
				},
				{
					link: 'https://www.facebook.com/Codenotary-Inc-106257094666687',
					icon: 'facebook',
				},
				{
					link: 'https://www.linkedin.com/company/codenotary/',
					icon: 'linkedin',
				},
			],
			navigation: [
				{
					title: 'Products',
					items: [
						{
							text: 'Codenotary Cloud',
							to: '',
						},
						{
							text: 'CNIL Metrics & Logs',
							to: '',
						},
					],
				},
				{
					title: 'Resources',
					items: [
						{
							text: 'Videos',
							link: 'https://www.youtube.com/channel/UCYDMxKTM74Acj8LerGrjUuw/videos',
						},
						{
							text: 'Blogs',
							to: '',
						},
						{
							text: 'immudb',
							to: '',
						},
					],
				},
				{
					title: 'Company',
					items: [
						{
							text: 'About Us',
							to: '',
						},
						{
							text: 'Join Us',
							to: '',
						},
						{
							text: 'Partners',
							to: '',
						},
						{
							text: 'Contact',
							to: '',
						},
					],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
// .footer {
// 	background-color: var(--v-primary-darken3) !important;
// 	padding-top: 40px;
// 	padding-bottom: 40px;

// 	.logo {
// 		height: 40px;
// 		width: auto;
// 	}

// 	p {
// 		color: white !important;

// 		&.brand-description {
// 			color: var(--v-primary-darken3) !important;
// 			max-width: 340px;
// 			font-size: 14px;
// 			line-height: 17px;
// 		}
// 	}

// 	a {
// 		color: var(--v-grey-lighten1);

// 		&:hover,
// 		&:active {
// 			color: var(--v-primary--lighten3);
// 		}
// 	}

// 	li {
// 		margin-bottom: $spacer;
// 	}

// 	.social-links {
// 		font-size: 30px;
// 		margin-bottom: 0;

// 		li {
// 			margin-right: 4px !important;
// 		}
// 	}

// 	.table {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: flex-start;
// 		justify-content: flex-start;
// 		flex: 0 0 200px;
// 		line-height: 19px;
// 		margin-top: 18px;

// 		& > * {
// 			margin: 7px 0 0;
// 			width: 100%;
// 		}

// 		.table_title {
// 			margin-bottom: 2px;
// 			font-size: 18px;
// 			margin-top: 0;
// 			line-height: 22px;
// 		}

// 		.table_link {
// 			color: var(--v-accent-base) !important;
// 			font-size: 14px;
// 			line-height: 17px;

// 			&:hover {
// 				color: var(--v-secondary-base) !important;
// 			}
// 		}
// 	}

// 	@media (max-width: $xs) {
// 		.brand {
// 			display: flex;
// 			flex-direction: column;
// 			flex: 1 0 100%;
// 			justify-content: center;
// 			align-items: center;

// 			.brand-description {
// 				max-width: unset;
// 			}
// 		}
// 	}
// }
</style>
