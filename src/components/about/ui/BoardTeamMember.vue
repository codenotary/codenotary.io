<template>
	<div class="board-team-member">
		<h4 class="title">
			{{ name }}
		</h4>
		<span>{{ position }}</span>
	</div>
</template>

<script>
export default {
	name: 'AboutUiBoardTeamMember',
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
.board-team-member {
	text-align: center;

	.title {
		font-weight: bold;
		font-size: 24px;
		color: var(--v-primary-base);
		margin: 1rem 0 0.5rem;
	}
}
</style>
