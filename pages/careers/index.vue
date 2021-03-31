<template>
	<div class="careers-page" />
</template>
<script>
export default {
	name: 'CareersPosts',
	middleware({ redirect, route }) {
		return redirect('/join');
	},
};
</script>
