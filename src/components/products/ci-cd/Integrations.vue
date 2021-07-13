<template>
	<UiPageSection id="integrations-section">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="CodeNotary Integrations">
						<p class="lead">
							CodeNotary integrates easily the most popular CI, CI/CD and DevOps tools, and you can add new ones in a flash with our API and command line tools.
						</p>
					</UiPageSectionHeader>
				</v-col>
			</v-row>
			<v-row>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="immudb"
						subtitle="high-speed immutable database"
						color="transparent"
						image="/images/immudb/mascot.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Docker"
						subtitle="Docker container protection"
						color="transparent"
						image="/images/integrations/square/docker.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Kubernetes"
						subtitle="Kube-notary for Kubernetes"
						color="transparent"
						image="/images/integrations/square/kubernetes.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Javascript"
						subtitle="JSVCN library for the web"
						color="transparent"
						image="/images/integrations/square/javascript.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Java"
						subtitle="JVCN library for Java"
						color="transparent"
						image="/images/integrations/square/java.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Maven"
						subtitle="Java Maven package"
						color="transparent"
						image="/images/integrations/square/maven.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Jenkins"
						subtitle="Jenkins CI"
						color="transparent"
						image="/images/integrations/square/jenkins.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Powershell"
						subtitle="Windows command line"
						color="transparent"
						image="/images/integrations/square/powershell.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Github"
						subtitle="Github Actions"
						color="transparent"
						image="/images/integrations/square/github.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Gitlab"
						subtitle="Gitlab CI/CD"
						color="transparent"
						image="/images/integrations/square/gitlab.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Git"
						subtitle="Standalone"
						color="transparent"
						image="/images/integrations/square/git.png"
					/>
				</v-col>
				<v-col
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<UiCardStory
						title="Travis"
						subtitle="Travis CI"
						color="transparent"
						image="/images/integrations/square/travis.png"
					/>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CiCdIntegrations',
};
</script>

<style lang="scss">
#integrations-section {
	background-color: var(--v-grey-lighten4);
	overflow: hidden;

	.story-card {
		min-height: 200px;
		max-height: 200px;
		margin-bottom: 2rem;
		padding: 1rem;

		img {
			height: 84px;
			// opacity: 0.55;
		}

		.title {
			color: #333;
		}

		.subtitle {
			color: #444;
		}

		&:hover {
			img {
				opacity: 1;
			}
		}

		@media (max-width: $xs) {
			h5 {
				font-size: 1rem;
			}
		}
	}
}
</style>
