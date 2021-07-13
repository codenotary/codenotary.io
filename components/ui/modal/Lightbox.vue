<template>
	<i-modal
		id="lightbox-modal"
		:class="classname"
		:value="value"
		@input="$emit('input', $event)"
	>
		<template slot="header">
			<span v-if="title">{{ title }}</span>
		</template>
		<img :src="src" :alt="alt">
	</i-modal>
</template>

<script>

export default {
	name: 'UiModalLightbox',
	props: {
		value: { type: Boolean, default: false },
		src: { type: String, default: '' },
		title: { type: String, default: '' },
		alt: { type: String, default: '' },
		classname: { type: String, default: '' },
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lightbox-modal {
	.modal-overlay {
		.modal {
			max-height: 100vh !important;
			max-width: 800px !important;
			max-width: 80vh !important;

			body {
				text-align: center;

				img {
					max-height: 100vh !important;
					max-width: 100vh !important;
				}
			}
		}
	}
}
</style>
