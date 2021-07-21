<template>
	<v-banner
		class="banner"
		sticky
	>
		<p>
			If you like immudb,
			<a
				href="https://github.com/codenotary/immudb"
				target="_blank"
				rel="noopener"
				class="light"
				@click="submit()"
			>
				give us a star on Github!
			</a>
			<v-icon
				class="star-icon"
				:size="20"
			>
				{{ mdiStar }}
			</v-icon>
		</p>
		<template #actions>
			<v-btn
				icon
				@click="close()"
			>
				<v-icon
					:size="20"
					color="#FAF9F8"
				>
					{{ mdiClose }}
				</v-icon>
			</v-btn>
		</template>
	</v-banner>
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

<style lang="scss" scoped>
.banner {
	z-index: 4;
	background: var(--v-dark-base) !important;

	p {
		color: #fff;
		font-family: Proxima Nova;
		text-align: right;

		a {
			color: #fff;
			font-weight: 700;
			text-decoration: underline;

			&:hover {
				color: #febf2d;
			}
		}

		.star-icon {
			color: var(--v-secondary-base);
		}
	}
}
</style>
