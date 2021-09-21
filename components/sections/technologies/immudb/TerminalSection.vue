<template>
	<PageSection
		id="immudb-code-examples-section"
		:bottom="0"
	>
		<i-container class="floating-container">
			<i-row>
				<i-column>
					<div class="immudb-code-examples-slider">
						<VueSlickCarousel v-bind="settings">
							<div>
								<i-row middle>
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title _font-weight-bold _text-primary">
											Very high throughput, immutable database with cryptographic verification
										</h4>
										<p>
											immudb is an indispensable asset when it comes to tamper-proof data:
										</p>
										<ul class="list">
											<li>Store every update to sensitive database fields (credit card or bank account data) of an existing application database</li>
											<li>Store CI/CD recipes to build and deployment pipelines</li>
											<li>Store public certificates</li>
											<li>Store tamper-proof log streams (i. e. audit logs)</li>
										</ul>
									</i-column>
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<!-- eslint-disable -->
										<Terminal rounded language="go">
											// Store any key, value auditproof and tamperproof
											key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
											verifiedIndex, err := client.SafeSet(ctx, key2, value2)

											if err != nil {
												exit(err)
											}

											fmt.Println("   SafeSet - add and verify entry:")
											printItem(key2, value2, verifiedIndex)
										</Terminal>
										<!-- eslint-enable -->
									</i-column>
								</i-row>
							</div>
							<div>
								<i-row middle class="_padding-1">
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title _font-weight-bold _text-primary">
											Intuitive setup
										</h4>
										<p>
											immudb is built with simplicity in mind:
										</p>
										<ul class="list">
											<li>Use the prebuilt binaries or Docker container images for a fast start</li>
											<li>Install, manage and run immudb and immugw as services (use 'immuadmin service')</li>
											<li>Simple make command integration if you want to build the applications yourself</li>
											<li>RESTful interfaces and easy to use clients</li>
											<li>Combine with any existing application</li>
										</ul>
									</i-column>
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<Terminal rounded language="bash">
											# install immudb service
											./immuadmin service immudb install

											# check current immudb service status
											./immuadmin service immudb status

											# install immugw service
											./immuadmin service immugw install

											# check immugw service
											./immuadmin service immugw status
										</Terminal>
									</i-column>
								</i-row>
							</div>
							<div>
								<i-row middle class="_padding-1">
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title _font-weight-bold _text-primary">
											Consistency check built-in
										</h4>
										<p>
											immudb architecture has built-in verification and audit functionality:
										</p>
										<ul class="list">
											<li>immudb server is continuously checking disk/memory consistency</li>
											<li>immugw is continuously checking the data consistency and integrity</li>
											<li>immuclient has built-in data consistency and integrity checks</li>
											<li>API's provide data ownership proof, verification and integrity functions</li>
										</ul>
									</i-column>
									<i-column
										xs="12"
										sm="12"
										md="6"
									>
										<!-- eslint-disable vue/html-indent -->
										<Terminal rounded language="go">
												// built-in verification for every entry
												verifiedItem, err := client.SafeGet(ctx, key2)

												if err != nil {
														exit(err)
												}

												fmt.Println("   SafeGet - fetch and verify entry:")
												printItem(nil, nil, verifiedItem)
										</Terminal>
										<!-- eslint-enable vue/html-indent -->
									</i-column>
								</i-row>
							</div>
							<template #prevArrow>
								<div class="custom-arrow _display-flex _justify-content-center _align-items-center">
									<img class="cn-icon" src="/icons/carousel-arrow-left.svg">
								</div>
							</template>
							<template #nextArrow>
								<div class="custom-arrow _display-flex _justify-content-center _align-items-center">
									<img class="cn-icon" src="/icons/carousel-arrow-right.svg">
								</div>
							</template>
							<template #customPaging>
								<div class="custom-dot" />
							</template>
						</VueSlickCarousel>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'TerminalSection',
	data() {
		return {
			settings: {
				slidesToShow: 1,
				arrows: true,
				dots: true,
				focusOnSelect: true,
				lazyLoad: 'progressive',
			},
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

// #codenotary-how-it-works-section {
//     background-color: $color-gray-10;
//     overflow: hidden;

//     .card {
//         margin-bottom: 2rem;
//         background: transparent;

//         img {
//             height: 96px;
//             object-fit: contain;
//         }

//         .body {
//             border: none;
//             text-align: left;
//         }
//     }
// }

#immudb-code-examples-section {
	position: relative;
	height: 770px !important;
	overflow: unset !important;

	@media screen and (max-width: $mobile-max-width) {
		height: 640px !important;

		.immudb-code-examples-slider {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	@media screen and (max-width: 767px) {
		.immudb-code-examples-slider {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.floating-container {
		position: absolute;
		top: -67px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	p {
		margin-bottom: 0.5rem;
	}

	@include breakpoint-down(sm) {
		margin-bottom: -90px;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -20px;
		}

		.slick-slider {
			padding: 16px !important;

			.slick-arrow {
				z-index: 1;

				&.slick-prev,
				&.slick-next {
					&,
					img {
						height: 40px !important;
						max-width: 40px !important;
					}
				}

				&.slick-next {
					right: -20px !important;
				}

				&.slick-prev {
					left: -20px !important;
				}
			}
		}
	}

	svg {
		width: 3rem;
		height: 3rem;
		color: $color-primary;
	}

	.title {
		margin-top: 0;
	}

	.row {
		align-items: center;
		margin-bottom: 5rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	pre {
		background: $cn-color-dark;
	}

	@media screen and (max-width: 768px) {
		text-align: center;

		.inverse {
			flex-direction: column-reverse;
		}

		p,
		h4,
		ul:not(.slick-dots) {
			text-align: left;
		}

		.terminal-wrapper {
			margin-top: 1rem;
		}
	}
}
</style>
