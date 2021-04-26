<template>
	<PageSection id="integrations-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="CodeNotary Integrations">
						<p class="lead">
							CodeNotary integrates easily the most popular CI, CI/CD and DevOps tools, and you can add new ones in a flash with our API and command line tools.
						</p>
					</PageSectionHeader>
				</i-column>
			</i-row>
			<i-row>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="immudb"
						subtitle="high-speed immutable database"
						color="transparent"
						image="/images/immudb/mascot.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Docker"
						subtitle="Docker container protection"
						color="transparent"
						image="/images/integrations/square/docker.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Kubernetes"
						subtitle="Kube-notary for Kubernetes"
						color="transparent"
						image="/images/integrations/square/kubernetes.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Javascript"
						subtitle="JSVCN library for the web"
						color="transparent"
						image="/images/integrations/square/javascript.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Java"
						subtitle="JVCN library for Java"
						color="transparent"
						image="/images/integrations/square/java.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Maven"
						subtitle="Java Maven package"
						color="transparent"
						image="/images/integrations/square/maven.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Jenkins"
						subtitle="Jenkins CI"
						color="transparent"
						image="/images/integrations/square/jenkins.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Powershell"
						subtitle="Windows command line"
						color="transparent"
						image="/images/integrations/square/powershell.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Github"
						subtitle="Github Actions"
						color="transparent"
						image="/images/integrations/square/github.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Gitlab"
						subtitle="Gitlab CI/CD"
						color="transparent"
						image="/images/integrations/square/gitlab.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Git"
						subtitle="Standalone"
						color="transparent"
						image="/images/integrations/square/git.png"
					/>
				</i-column>
				<i-column
					xs="6"
					sm="4"
					md="3"
					lg="3"
				>
					<StoryCard
						title="Travis"
						subtitle="Travis CI"
						color="transparent"
						image="/images/integrations/square/travis.png"
					/>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'CiCdIntegrations',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#integrations-section {
	background-color: $color-gray-10;
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

		@include breakpoint-down(xs) {
			h5 {
				font-size: 1rem;
			}
		}
	}
}
</style>
