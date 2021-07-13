<template>
	<no-ssr>
		<div class="terminal-wrapper">
			<div class="terminal">
				<div v-if="hasTitle" class="bar">
					<div class="buttons">
						<span class="circle red" />
						<span class="circle yellow" />
						<span class="circle green" />
					</div>
					<div class="title">
						{{ title }}
					</div>
				</div>
				<div class="body" :class="{ rounded }">
					<prism :lang="language">
						<slot />
					</prism>
				</div>
			</div>
		</div>
	</no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr';

export default {
	name: 'UiTerminal',
	components: {
		'no-ssr': NoSSR,
	},
	props: {
		title: { type: String, default: null },
		language: { type: String, default: 'go' },
		rounded: { type: Boolean, default: false },
	},
	computed: {
		hasTitle() {
			return this.title !== null;
		},
	},
};
</script>

<style lang="scss">
.terminal-wrapper {
	display: block;
	box-sizing: border-box;
	border-radius: 4px !important;
	position: relative;
	overflow: hidden;

	.bar {
		background: #e8e6e8;
		color: black;
		padding: 5px;
		border-radius: 5px 5px 0 0;

		.buttons {
			position: absolute;
			top: 7px;
			left: 5px;

			.circle {
				width: 12px;
				height: 12px;
				display: inline-block;
				border-radius: 15px;
				margin-left: 2px;
				border-width: 1px;
				border-style: solid;

				&.red {
					background: #ec6a5f;
					border-color: #d04e42;
				}

				&.green {
					background: #64cc57;
					border-color: #4ea73b;
				}

				&.yellow {
					background: #f5c04f;
					border-color: #d6a13d;
				}
			}
		}

		.title {
			text-align: center;
		}

		.clear {
			clear: both;
		}
	}

	.body {
		&.rounded {
			border-radius: 30px;
			overflow: hidden;
		}

		.prism {
			pre[class*="language-"] {
				display: block;
				margin: 0;
				padding: 1rem;
				background: var(--v-primary-darken3) !important;
				box-sizing: border-box;
				overflow: auto;
				border-radius: 0;
			}

			.toolbar {
				.toolbar-item {
					margin-left: $spacer-1-2;
				}
			}
		}
	}
}
</style>
