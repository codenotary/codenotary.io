<template>
	<i-container class="highlighted-cards">
		<hero-card
			v-for="(card, index) in content.heroCardsSection.cards" :key="index"
			:title="card.title" :subtitle="card.subtitle"
		>
			<cn-button slot="action" link variant="dark"
				:to="card.internalLink ? { name: card.internalLink.type, params: { post: card.internalLink.entry }} : null" :href="card.href"
			>
				{{ card.actionText }}
			</cn-button>
		</hero-card>
	</i-container>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'HeroCardsSection',
	data() {
		return {
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>
.highlighted-cards {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex: 1 0 100%;
	flex-wrap: wrap;

	& > * {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}

	body {
		color: red;
	}

	@media only screen and (min-width: 999px) {
		& {
			margin-top: -80px;
		}
	}
}
</style>
