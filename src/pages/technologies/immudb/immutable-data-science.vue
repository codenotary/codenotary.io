<template>
	<UiPageSection>
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader class="_text-left _margin-left-0 _margin-bottom-2">
						<h1 slot="title">
							Immutable Data Science
						</h1>
					</UiPageSectionHeader>
					<div class="ppp-info-alert">
						<p>
							We are the developers of <nuxt-link :to="{ name: 'technologies-immudb' }">
								immudb
							</nuxt-link>, an Open Source immutable database for systems and applications. Given the immutability of anything that is stored inside our immudb database, we think that it can be a valuable platform to store sensitive data important to current political or social discourse, so that data scientists can then get insight from data without fear of partisan or malevolent meddling with the core datasets. We started with the US federal government PPP dataset but we will add more in the future. Our service is free for all to use.
						</p>
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<UiPageSectionHeader class="_text-left _margin-left-0 _margin-bottom-0 _margin-top-4">
						<h2 slot="title">
							Immutable Datasets
						</h2>
					</UiPageSectionHeader>
				</v-col>
			</v-row>
			<v-row class="_margin-bottom-2">
				<v-col>
					<i-card class="link-card">
						<fa class="icon" icon="chevron-right" />
						<a class="_overlay-link" href="https://ppp.immudb.io"><strong>U.S. Federal Reserve Payment Protection Program</strong></a>
					</i-card>
				</v-col>
			</v-row>
		</v-container>
		</PageSection>
	</uipagesection>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'ImmutableDataScience',
	head() {
		return {
			title: title('Blog'),
		};
	},
};
</script>

<style lang="scss">
.ppp-info-alert {
	border: 1px solid var(--v-primary-base);
	border-left-width: 5px;
	padding: 1rem;
	margin: 2rem 0 1rem;

	p {
		margin: 0;
	}
}

.link-card {
	.icon {
		position: absolute;
		right: 2rem;
		top: 50%;
		margin-top: -8px;
		transition: right 0.3s ease;
	}

	&:hover .icon {
		right: 1rem;
	}
}
</style>
