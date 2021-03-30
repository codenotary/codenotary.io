<template>
	<page-section class="footer">
		<i-container>
			<i-row>
				<i-column
					xs="12" sm="6"
				>
					<img
						class="logo" src="/images/logo/logo_white.png"
						alt="CodeNotary"
					>
					<p>
						Immutable notarization for all your sensitive data. On-premise or in the cloud, easy to use
						tamperproof storage with cryptographic verification, processing millions of transactions a
						second.
					</p>
				</i-column>
			</i-row>
			<i-row class="_margin-top-1">
				<i-column
					xs="12" sm="6"
					lg="3"
				>
					<h4>Products</h4>
					<ul class="list -unstyled">
						<li>
							<router-link :to="{ name: 'products-ledger-compliance' }">
								Ledger Compliance
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'products-ci-cd' }">
								Immutability for CI/CD
							</router-link>
						</li>
					</ul>
				</i-column>
				<i-column
					xs="12" sm="6"
					lg="3"
				>
					<h4>Technologies</h4>
					<ul class="list -unstyled">
						<li>
							<router-link :to="{ name: 'technologies-immudb' }">
								immudb
							</router-link>
						</li>
					</ul>
				</i-column>
				<i-column
					xs="12" sm="6"
					lg="3"
				>
					<h4>Company</h4>
					<ul class="list -unstyled">
						<li>
							<router-link :to="{ name: 'about' }">
								About us
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'partners' }">
								Partners
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'join' }">
								Join Us
							</router-link>
						</li>
					</ul>
				</i-column>
				<i-column
					xs="12" sm="6"
					lg="3"
				>
					<h4>Connect</h4>
					<ul class="list -unstyled">
						<li>
							<router-link :to="{ name: 'contact' }">
								Contact us
							</router-link>
						</li>
					</ul>
					<ul class="social-links list -inline">
						<li>
							<a href="https://github.com/vchain-us">
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
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.footer {
	background: $color-gray-90;

	.logo {
		height: 64px;
		margin-top: -10px;
		width: auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: $color-white;
		margin-top: 0;
	}

	p {
		color: $color-gray-60;
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
}
</style>
