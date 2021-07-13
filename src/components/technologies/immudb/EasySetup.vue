<template>
	<UiPageSection id="immudb-easy-setup-section">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="Easy setup" color="white"
						:bottom="0"
					/>
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 _display-flex _justify-content-center">
				<v-col
					class="_margin-x-auto"
					xs="12"
					sm="12"
					md="8"
					lg="8"
				>
					<span class="cn-text-white">
						Build Docker images based on the Dockerfiles in the GitHub repository
						for the most common architectures or use the prebuild ones on Dockerhub for Linux.
					</span>
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 _display-flex _justify-content-center">
				<v-row
					class="_padding-x-0 _display-flex _justify-content-center"
					style="max-width: 100%;"
				>
					<v-col
						class="_margin-top-2 _margin-x-auto _padding-x-0"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<!-- eslint-disable -->
						<UiTerminal
							language="bash"
							rounded
						>
							docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
						</UiTerminal>
						<!-- eslint-enable -->
					</v-col>
					<v-col
						class="_margin-top-2 _margin-x-auto"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<p class="action _display-flex _flex-direction-row _justify-content-center">
							<UiButtonCn
								variant="secondary"
								href="https://docs.immudb.io"
								target="_blank"
								rel="nofollow"
								size="lg"
							>
								Documentation
							</UiButtonCn>
						</p>
					</v-col>
				</v-row>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbEasySetup',
};
</script>

<style lang="scss">
#immudb-easy-setup-section {
	padding: 120px 0 333px 0 !important;
	text-align: center;
	background: $cn-dark-gradient-inverse;

	@media (max-width: $sm) {
		padding: 419px 0 351px 0 !important;
	}

	pre.language-bash {
		width: auto;
		display: inline-block;
		max-width: 100%;
		background: var(--v-primary-darken3);
		border-radius: 30px;
		padding: 1em 2em;

		.line-numbers-rows {
			display: none !important;
		}
	}
}
</style>
