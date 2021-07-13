<template>
	<i-card class="team-member">
		<div class="meta">
			<img
				v-if="image"
				class="image -responsive"
				:src="image"
				:alt="name"
				width="260"
			>
			<h4 class="title">
				{{ name }}
			</h4>
			<strong>{{ position }}</strong>
		</div>
		<div>
			<slot />
		</div>
	</i-card>
</template>

<script>
export default {
	name: 'AboutUiTeamMember',
	props: {
		name: {
			type: String,
			default: '',
		},
		position: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
.team-member {
	.meta {
		text-align: center;
	}

	.title {
		font-weight: bold;
		color: var(--v-primary-base);
		margin: 1rem 0 0.5rem;
	}

	img {
		width: 200px;
		height: auto;
		border-radius: 100%;
	}
}
</style>
