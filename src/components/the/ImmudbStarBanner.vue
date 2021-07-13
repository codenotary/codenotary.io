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
		<v-btn
			link
			class="close-button"
			@click="close()"
		>
			<i-icon icon="times" size="sm" />
		</v-btn>
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
section.immudb-star-banner {
	position: relative;
	background-color: var(--v-primary-darken3);
	transition: all 0.15s ease-out;
	z-index: 995;

	&.-light {
		border-bottom: 1px solid var(--v-primary-lighten3);
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
			color: var(--v-grey-lighten1) !important;
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

	@media (max-width: $xs) {
		.close-button {
			top: 0.8rem;
			right: 0.4rem;
		}
	}
}
</style>
