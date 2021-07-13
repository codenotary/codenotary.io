<template>
	<section class="immudb-star-banner _justify-content-center">
		<div class="_display-flex _align-items-center">
			<span>
				If you like immudb,
				<a
					class="_font-weight-bold _text-decoration-underline"
					href="https://github.com/codenotary/immudb"
					target="_blank"
					rel="noopener"
					@click="submit()"
				>
					give us a star on Github!
				</a>
				<fa icon="star" class="_margin-left-1-2" />
			</span>
		</div>
		<i-button
			link
			class="close-button"
			size="sm"
			@click="close()"
		>
			<i-icon icon="times" size="sm" />
		</i-button>
	</section>
</template>

<script>
export default {
	name: 'TheImmudbStarBanner',

	methods: {
		submit () {
			this.$emit('submit');
		},
		close () {
			this.$emit('close');
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

section.immudb-star-banner {
	position: relative;
	background-color: $cn-color-dark;
	transition: all 0.15s ease-out;
	z-index: 995;

	&.-light {
		border-bottom: 1px solid $border-color-light;
		background: white !important;
	}

	span,
	span > a {
		font-size: 84% !important;
	}

	span {
		font-weight: 300 !important;
		color: white;

		a {
			color: white;
			text-decoration: underline;
			font-weight: 500;
		}
	}

	.button {
		&:hover,
		&:active,
		&.nuxt-link-active {
			color: $color-gray-30 !important;
		}

		&:hover {
			background: rgba(255, 255, 255, 0.15) !important;
		}

		&:active,
		&.nuxt-link-active {
			background: rgba(255, 255, 255, 0.05) !important;
		}
	}

	.svg-inline--fa {
		color: #ffce6e;
	}

	.close-button {
		position: absolute;
		top: 0.4rem;
		right: 1.6rem;
		color: white;
	}

	@media (max-width: 480px) {
		.close-button {
			top: 0.8rem;
			right: 0.4rem;
		}
	}
}
</style>
