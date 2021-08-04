<template>
	<v-system-bar
		v-if="open"
		id="TheBanner"
		class="dark d-flex justify-center align-center"
		fixed
		app
	>
		<v-spacer />
		<div class="d-flex justify-center align-center">
			<p
				class="ma-0 pa-0 caption white--text"
				style="margin-top: 1px !important;"
			>
				If you like immudb,
				<a
					href="https://github.com/codenotary/immudb"
					target="_blank"
					rel="noopener"
				>give us a star on github</a>
			</p>
			<v-icon
				class="ma-0 pa-0 ml-2"
				color="secondary"
				:size="18"
			>
				{{ mdiStar }}
			</v-icon>
		</div>
		<v-spacer />
		<v-btn
			class="ma-0 pa-0 text-center white--text"
			text
			icon
			dense
			x-small
			@click="onClose"
		>
			<v-icon
				color="white"
				class="ma-0 pa-0"
				:size="18"
			>
				{{ mdiClose }}
			</v-icon>
		</v-btn>
	</v-system-bar>
</template>

<script>
import {
	mdiStar,
	mdiClose,
} from '@mdi/js';

export default {
	name: 'TheBanner',
	data () {
		return {
			mdiStar,
			mdiClose,
			height: 1,
			open: true,
		};
	},
	methods: {
		onClose () {
			this.$emit('close');
		},
		onSubmit () {
			this.$emit('submit');
		},
	},
};
</script>

<style lang="scss">
#TheBanner {
	a {
		&:hover {
			span {
				text-decoration: underline !important;
			}
		}
	}
}
</style>
