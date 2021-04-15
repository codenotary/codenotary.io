<template>
	<div class="careers-post-page" />
</template>
<script>
export default {
	name: 'CareersPost',
	middleware({ redirect, route }) {
		if (route) {
			const { params: { post } } = route;
			if (post) {
				return redirect(`/join/${ post }`);
			}
			return redirect('/join');
		}
	},
};
</script>
