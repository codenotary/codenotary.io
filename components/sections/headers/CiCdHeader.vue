<template>
	<i-header id="ci-cd-header">
		<i-row class="_align-items-center">
			<i-column
				xs="12" md="4"
				class="_text-center _margin-bottom-1 _hidden-md-and-up"
			>
				<img src="/images/mascot.png" alt="CodeNotary Mascot">
			</i-column>
			<i-column md="8">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					Tamperproof ledger solutions for all your sensitive data
				</h1>
				<p class="lead _margin-bottom-0">
					Secure your sensitive data by creating immutable ledger proofs of existence, notarizations and seals.
				</p>
				<p class="lead _margin-bottom-0">
					Our highly scalable service already processes tens of millions of transactions every single month.
				</p>
				<p class="action">
					<i-button
						size="lg" outline
						variant="primary" href="https://dashboard.codenotary.io/auth/signin"
						target="_blank"
					>
						Sign in
					</i-button>
					<i-button
						size="lg" class="_margin-left-1"
						variant="primary" href="https://dashboard.codenotary.io/auth/signup"
						target="_blank"
					>
						Sign up
					</i-button>
				</p>
			</i-column>
			<i-column
				xs="12" md="4"
				class="_text-center  _hidden-sm-and-down"
			>
				<img src="/images/mascot.png" alt="CodeNotary Mascot">
			</i-column>
		</i-row>
	</i-header>
</template>

<script>
export default {
	name: 'CiCdHeader',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-width: 175px;

#ci-cd-header {
	background-color: white;
	// background-image: url('/images/ztc/header.jpg');
	// background-position: right top;
	// background-size: 75% auto;
	text-align: left;

	img {
		width: $mascot-width;
		height: auto;
	}

	h1 {
		margin-top: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}

	@include breakpoint-down(sm) {
		background-image: none;
		text-align: center;

		img#mascot {
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media screen and (min-width: 2280px) {
		background-size: 1560px auto;
	}
}
</style>
