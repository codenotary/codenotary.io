<template>
	<v-container>
		<h4 class="brand--text text-h4 font-weight-700 text-center">
			{{ content.aboutImmudbSection.title }}
		</h4>
		<div class="d-flex justify-center mt-5 flex-column flex-md-row align-center">
			<v-sheet
				v-for="(card, index) in content.aboutImmudbSection.cards"
				:key="card.title"
				elevation="3"
				class="card white d-flex flex-column align-center rounded-xl py-5 px-10 flex-grow-1 flex-shrink-1"
				:class="index > 0 ? 'ml-md-5 mt-5 mt-md-0' : ''"
			>
				<v-img :src="card.imageUrl" contain />
				<h4 class="text-h4">
					{{ card.title }}
				</h4>
				<p
					v-for="phrases in card.subtitles"
					:key="phrases[0].text"
					class="text-center"
				>
					<template v-for="phrase in phrases">
						<b v-if="phrase.type === 'bold'" :key="phrase.text">{{ phrase.text }}</b>
						<span v-else-if="phrase.type === 'regular'" :key="phrase.text">{{ phrase.text }}</span>
						<br v-if="hasBreak(phrase)" :key="phrase.text">
					</template>
				</p>
			</v-sheet>
		</div>
	</v-container>
</template>

<script>
import immudbContent from '@/content/immudb';

export default {
	name: 'TechnologiesImmudbCardsSection',
	data() {
		return {
			content: immudbContent,
		};
	},
	methods: {
		hasBreak({ nobreak = false }) {
			return !nobreak;
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	max-width: 373px;
}
</style>
