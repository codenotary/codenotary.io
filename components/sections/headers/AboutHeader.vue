<template>
	<i-header id="about-header">
		<i-row class="_align-items-center">
			<i-column xs="12" md="8">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					CodeNotary Inc. - The Immutability Specialists
				</h1>
				<h2 class="_font-weight-bold _margin-top-1">
					the leading company for immutable recording of business data.
				</h2>
				<p class="lead _margin-bottom-0">
					Immutable ledgers are a requirement to enable businesses to successfully move to cloud solutions without compromising trust and integrity.
				</p>
				<p class="lead _margin-bottom-0">
					<a href="/blog/vchain-completes-aquisition-of-ledger-and-log-compliance-company-opvizor"><b>Latest News</b>: Acquisition of Opvizor</a>
				</p>
			</i-column>
			<i-column md="4" class="_padding-left-4 _text-left">
				<p class="_padding-0 margin-0 _margin-bottom-2">
					<img
						src="/images/logo/logo_black.png"
						alt="CodeNotary"
						class="image -responsive"
						width="220"
					>
				</p>
				<p class="_padding-0 margin-0">
					<a
						href="https://www.vmware.com/partners/work-with-vmware/tap.html"
						target="_blank"
						rel="nofollow"
					>
						<img
							src="/images/tap.png"
							alt="VMware Technology Alliance Partner (TAP)"
							class="image -responsive"
							width="100"
						>
					</a>
				</p>
			</i-column>
		</i-row>
	</i-header>
</template>

<script>
export default {
	name: 'AboutHeader',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#about-header {
	background-color: white;
	width: 100%;
	text-align: left;

	h1 {
		margin-top: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}
}
</style>
