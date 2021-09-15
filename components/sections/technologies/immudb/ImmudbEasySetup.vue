<template>
	<pageSection
		id="immudb-easy-setup-section"
		:top="6"
		:top-xl="6"
		:bottom="6"
		:bottom-xl="6"
	>
		<i-container>
			<i-row>
				<i-column>
					<page-section-header
						title="Easy setup" color="white"
						:bottom="0"
					/>
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-column
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
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-row
					class="_padding-x-0 _display-flex _justify-content-center"
					style="max-width: 100%;"
				>
					<i-column
						class="_margin-top-2 _margin-x-auto _padding-x-0"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<!-- eslint-disable -->
						<Terminal
							language="bash"
							rounded
						>
							docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
						</Terminal>
						<!-- eslint-enable -->
					</i-column>
					<i-column
						class="_margin-top-1 _margin-x-auto"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<p class="action _display-flex _flex-direction-row _justify-content-center">
							<cn-button
								class="cta-button"
								variant="secondary"
								href="https://docs.immudb.io"
								target="_blank"
								rel="nofollow"
							>
								Documentation
							</cn-button>
						</p>
					</i-column>
				</i-row>
			</i-row>
		</i-container>
	</pageSection>
</template>

<script>
export default {
	name: 'ImmudbEasySetup',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-easy-setup-section {
	padding: 120px 0 333px 0 !important;
	text-align: center;
	background: $cn-dark-gradient_inverse;

	@include breakpoint-down(sm) {
		padding: 419px 0 351px 0 !important;
	}

	pre.language-bash {
		width: auto;
		display: inline-block;
		max-width: 100%;
		background: $cn-color-dark;
		border-radius: 30px;
		padding: 1em 2em;
		box-shadow: $cn-shadow-sm;
		border: 1px solid $cn-color-primary;

		.line-numbers-rows {
			display: none !important;
		}
	}
}
</style>
