<template>
	<!-- <UiPageSection id="immudb-easy-setup-section">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="Easy setup" color="white"
						:bottom="0"
					/>
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 d-flex justify-center">
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
			<v-row class="_padding-x-0 d-flex justify-center">
				<v-row
					class="_padding-x-0 d-flex justify-center"
					style="max-width: 100%;"
				>
					<v-col
						class="_margin-top-2 _margin-x-auto _padding-x-0"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<UiTerminal
							language="bash"
							rounded
						>
							docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
						</UiTerminal>
					</v-col>
					<v-col
						class="_margin-top-2 _margin-x-auto"
						xs="12"
						sm="12"
						md="12"
						lg="12"
					>
						<p class="action d-flex flex-row justify-center">
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
	</UiPageSection> -->
	<v-container fluid class="container py-16">
		<h2 class="text-center white--text mb-6">
			Easy Setup
		</h2>
		<p class="text-center white--text">
			Build Docker images based on the Dockerfiles in the GitHub repository for the most common<br>
			architectures or use the prebuild ones on Dockerhub for Linux.
		</p>
		<div class="d-flex justify-center mb-6">
			<UiTerminal
				language="bash"
				class="d-inline-block"
			>
				docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
			</UiTerminal>
		</div>
		<p class="text-center ma-0">
			<v-btn
				color="secondary"
				href="https://docs.immudb.io"
			>
				Documentation
			</v-btn>
		</p>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbEasySetup',
};
</script>

<style lang="scss" scoped>
.container {
	background: $cn-dark-gradient-inverse;
}
</style>
