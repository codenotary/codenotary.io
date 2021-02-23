<template>
	<div
		v-if="!outlined && color"
		class="story-card"
		:style="`background-color: ${color}`"
	>
		<img
			v-if="image"
			class="image -responsive"
			:class="{'image-only': !title && !subtitle }"
			:src="image"
			:alt="title"
		>
		<h5 v-if="title" class="title">
			{{ title }}
		</h5>
		<p v-if="subtitle" class="subtitle">
			{{ subtitle }}
		</p>
	</div>
	<div v-else-if="!outlined" :class="`story-card _background-${variant}`">
		<img
			v-if="image"
			class="image -responsive"
			:class="{'image-only': !title && !subtitle }"
			:src="image"
			:alt="title"
		>
		<h5 v-if="title" class="title">
			{{ title }}
		</h5>
		<p v-if="subtitle" class="subtitle">
			{{ subtitle }}
		</p>
	</div>
	<div
		v-else
		class="story-card"
		:style="`border: 2px solid ${color}`"
	>
		<img
			v-if="image"
			class="image -responsive"
			:class="{'image-only': !title && !subtitle }"
			:src="image"
			:alt="title"
		>
		<h5 v-if="title" class="title _text-black">
			{{ title }}
		</h5>
		<p v-if="subtitle" class="subtitle _text-black">
			{{ subtitle }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'StoryCard',
	props: {
		title: { type: String, default: '' },
		subtitle: { type: String, default: '' },
		image: { type: String, default: '' },
		variant: { type: String, default: 'dark' },
		color: { type: String, default: '#333' },
		outlined: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss">
.story-card {
	text-align: center;
	padding: 2rem 1rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		width: 80px;
		height: auto;
		display: block;
		margin: 0 auto;
		object-fit: contain;

		&.image-only {
			width: 80%;
		}
	}

	.title {
		font-weight: bold;
		color: white;
		margin: 1rem 0 0;
	}

	.subtitle {
		font-weight: 700;
		margin: 6px 0 0 0;
		color: white;
		font-size: 16px;
		line-height: 18px;
	}

	&.small {
		.title {
			font-size: 18px;
		}
	}
}
</style>
