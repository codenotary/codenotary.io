<template>
	<UiPageSection id="immudb-get-started-end-section">
		<UiPageSectionHeader
			color="white" title="The open-source immutable database"
			:bottom="0"
		/>
		<i-container>
			<v-row class="_padding-x-0 _display-flex _justify-content-center">
				<v-col
					class="_margin-x-auto" xs="12"
					sm="12" md="8"
					lg="8"
				>
					Run immudb easily on Linux, FreeBSD, Microsoft Windows, and macOS, along with other systems derived from them, such as Kubernetes and Docker.
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 _display-flex _justify-content-center">
				<v-col
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
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbGetStarted',
};
</script>

<style lang="scss">
#immudb-get-started-end-section {
	text-align: center;
	background: $cn-dark-gradient-inverse;
	color: white;
	padding-top: 168px !important;
	padding-bottom: 54px !important;

	@media (max-width: $sm) {
		padding: 30px 20px 44px !important;
	}
}
</style>
