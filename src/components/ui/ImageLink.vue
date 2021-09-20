<template>
	<v-container class="d-flex justify-center">
		<v-sheet
			elevation="3"
			class="rounded-xl sheet"
		>
			<h4 class="white--text font-weight-700 text-center text-h4 mt-8 mb-5">
				{{ title }}
			</h4>
			<a
				:href="link"
				target="_blank"
				rel="noopener nofollow"
			>
				<v-img
					:src="imageSrc"
					class="rounded-xl"
					contain
				/>
			</a>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	name: 'ImageLink',
	props: {
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		imageSrc: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.sheet {
	background: $cn-dark-gradient;
}
</style>
