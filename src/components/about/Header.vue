<template>
	<v-app-bar id="about-header">
		<v-row class="align-center">
			<v-col xs="12" md="8">
				<h1 class="d6 font-weight-bold primary--text _margin-top-0">
					CodeNotary Inc. - The Immutability Specialists
				</h1>
				<h2 class="font-weight-bold mt-4">
					the leading company for trusted CI/CD.
				</h2>
				<p class="lead _margin-bottom-0">
					We bring trust and integrity into the software life cycle by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies.
				</p>
			</v-col>
			<v-col md="4" class="_padding-left-4 _text-left">
				<p class="pa-0 margin-0 _margin-bottom-2">
					<img
						src="/images/logo/logo_black.png"
						alt="CodeNotary"
						class="image -responsive"
						width="220"
					>
				</p>
				<p class="pa-0 ma-0 _margin-bottom-2">
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
				<p class="pa-0 ma-0">
					<a
						href="https://www.ibm.com/partnerworld/public" target="_blank"
						rel="nofollow"
					>
						<img
							src="/images/ibm.jpeg" alt="IBM PartnerWorld"
							class="image -responsive" width="180"
						>
					</a>
				</p>
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
export default {
	name: 'AboutHeader',
};
</script>

<style lang="scss">
#about-header {
	background-color: white;
	width: 100%;
	text-align: left;

	h1 {
		margin-top: 0;
	}

	@media (max-width: $md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}
}
</style>
