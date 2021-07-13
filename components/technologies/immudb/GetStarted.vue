<template>
	<UiPageSection id="immudb-get-started-end-section">
		<UiPageSectionHeader
			color="white" title="The open-source immutable database"
			:bottom="0"
		/>
		<i-container>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-column
					class="_margin-x-auto" xs="12"
					sm="12" md="8"
					lg="8"
				>
					Run immudb easily on Linux, FreeBSD, Microsoft Windows, and macOS, along with other systems derived from them, such as Kubernetes and Docker.
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-column
					class="_margin-top-2 _margin-x-auto" xs="12"
					sm="12" md="8"
					lg="8"
				>
					<p class="action _display-flex _flex-direction-row _justify-content-center">
						<UiButtonCn
							variant="secondary"
							href="https://docs.immudb.io"
							target="_blank"
							rel="nofollow"
							size="lg"
						>
							Get started today
						</UiButtonCn>
					</p>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbGetStarted',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-get-started-end-section {
	text-align: center;
	background: $cn-dark-gradient_inverse;
	color: white;
	padding-top: 168px !important;
	padding-bottom: 54px !important;

	@include breakpoint-down(sm) {
		padding: 30px 20px 44px !important;
	}
}
</style>
