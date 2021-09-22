<template>
	<v-container fluid class="dark">
		<v-container>
			<v-row class="py-4">
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
					<p class="accent--text mt-3 font-weight-400">
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
								<template v-for="{ text, to = null, link = null, path = null } in items">
									<v-hover
										:key="text"
										v-slot="{ hover }"
										class="mt-2"
									>
										<a
											v-if="to !== null"
											:to="to"
											:class="hover ? 'secondary--text text-decoration-underline' : 'accent--text'"
										>
											{{ text }}
										</a>
										<a
											v-else-if="path !== null"
											:href="`//codenotary.com/${ path }`"
											:class="hover ? 'secondary--text text-decoration-underline' : 'accent--text'"
										>
											{{ text }}
										</a>
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
							path: 'products/ci-cd',
						},
						{
							text: 'CNIL Metrics & Logs',
							link: '//ml.codenotary.com/products/immutable-ledger-logs-and-metrics/',
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
							path: 'blog',
						},
						{
							text: 'immudb',
							path: 'technologies/immudb',
						},
					],
				},
				{
					title: 'Company',
					items: [
						{
							text: 'About Us',
							path: 'about',
						},
						{
							text: 'Join Us',
							path: 'join',
						},
						{
							text: 'Partners',
							path: 'partners',
							to: { name: 'partners' },
						},
						{
							text: 'Contact',
							path: 'contact',
						},
					],
				},
			],
		};
	},
};
</script>
