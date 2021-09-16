<template>
	<section
		class="logo-wrapper fill-width no-transation"
		:class="className"
	>
		<img
			class="logo no-transation"
			:src="getAsset"
			:class="getLogoSize"
			:alt="getAlt"
			:title="getTitle"
		>
	</section>
</template>

<script>
export default {
	name: 'TheLogo',
	props: {
		className: { type: String, default: 'd-flex justify-start align-center' },
		svg: { type: Boolean, default: true },
		align: { type: String, default: 'left' },
		size: { type: String, default: 'normal' },
		color: { type: String, default: 'blue' },
		text: { type: String, default: 'default' },
		icon: { type: Boolean, default: false },
	},
	computed: {
		getText () {
			return `Cloud® v${ process.env.V_VERSION }`;
		},
		getAlt () {
			return `CodeNotary ${ this.getText }`;
		},
		getTitle () {
			return `CodeNotary ${ this.getText }`;
		},
		getSize () {
			return this.size || 'normal';
		},
		getColor () {
			return this.color === 'blue' ? '' : `_${ this.color }`;
		},
		getMime () {
			return this.svg ? 'svg' : 'png';
		},
		getPath () {
			return `/images/logo/logo${ this.text && !this.icon ? '_text' : '' }`;
		},
		getIcon () {
			return this.icon ? '_icon' : '';
		},
		getAsset () {
			return '/images/logo/logo_white.png';
		},
		getTextColor () {
			return 'text--blue';
		},
		getAlign () {
			return this.align === 'center' ? 'justify-center' : 'justify-start';
		},
		getLogoSize () {
			return `logo--${ this.icon ? 'icon--' : '' }${ this.getSize }`;
		},
		getTextSize () {
			return `text--${ this.icon ? 'icon--' : '' }${ this.getSize }`;
		},
	},
};
</script>

<style lang="scss">
section.logo-wrapper {
	position: relative;
	display: inline-block;
	width: auto;
	height: auto;
	min-height: 48px !important;

	.logo {
		display: block;
		height: auto !important;

		&:focus {
			outline: 0 !important;
			border: none !important;
		}
	}

	.logo-- {
		&x-small {
			max-width: 104.5px !important;
			width: 104.5px !important;
		}

		&small {
			max-width: 170px !important;
			width: 170px !important;
		}

		&normal {
			max-width: 240px !important;
			width: 240px !important;
		}

		&big {
			max-width: 248px !important;
			height: 54.5px;
		}

		&icon-- {
			&x-small {
				max-width: 16px !important;
				width: 16px !important;
			}

			&small {
				max-width: 32px !important;
				width: 32px !important;
			}

			&normal {
				max-width: 56px !important;
				width: 56px !important;
			}

			&big {
				max-width: 64px !important;
				width: 64px !important;
			}
		}
	}

	.text-- {
		&x-small {
			position: absolute;
			font-size: 7px;
			top: 34px;
			left: 26px;
		}

		&small {
			position: absolute;
			font-size: 8px;
			top: 36px;
			left: 54px;
		}

		&normal {
			position: absolute;
			font-size: 10px;
			top: 48px;
			left: 78px;
			font-weight: 500;
		}

		&big {
			position: absolute;
			font-size: 12px;
			top: 56px;
			left: 62px;
		}

		&icon-- {
			&small {
				position: absolute;
				font-size: 9px;
				top: 38px;
				left: 16px;
			}

			&normal {
				position: absolute;
				font-size: 10px;
				top: 36px;
				left: 24px;

				&.second-row {
					top: 46px;
					left: 14px;
				}
			}

			&big {
				position: absolute;
				font-size: 14px;
				top: 56px;
				left: 16px;
			}
		}

		&white {
			color: var(--v-white-base) !important;
		}

		&blue {
			color: var(--v-primary-base) !important;
		}
	}

	&.help--logo {
		.text--logo {
			top: 56px !important;
			left: 80px !important;
			font-size: 10px;
			font-weight: 500;
			letter-spacing: 0.0892857143em;
			text-indent: 0.0892857143em;
			white-space: nowrap;
			text-transform: uppercase !important;
		}
	}
}
</style>
