<template>
	<UiPageSection id="immudb-by-developers-for-developers">
		<i-container class="floating-container">
			<i-row>
				<i-column>
					<UiPageSectionHeader
						title="by Developers, for Developers"
						:bottom="0"
						color="white"
						weight="bold"
					/>
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-column
					class="_margin-bottom-2 _margin-x-auto _text-center" xs="12"
					sm="12" md="8"
					lg="8"
				>
					<span class="_text-white _text-center">
						We have carefully designed immudb to be the one-stop intuitive immutable database solution, simple to write and simple to use.
					</span>
				</i-column>
			</i-row>
			<i-row>
				<i-column class="_padding-x-0">
					<i-tabs
						class="analyze-and-manage-tabs"
						stretch
						block
					>
						<i-tab
							class="_padding-top-2"
							:title="'Connect to immudb'"
						>
							<i-row
								class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
							>
								<i-column

									class="_display-flex _justify-content-center _align-items-center"
									xs="12"
									sm="12"
									md="12"
									lg="12"
								>
									<!-- eslint-disable -->
									<UiTerminal
										language="go"
										rounded
									>
										client, err := immuclient.NewImmuClient(immuclient.DefaultOptions())
										if err != nil {
											exit(err)
										}
										ctx := context.Background()
									</UiTerminal>
									<!-- eslint-enable -->
								</i-column>
							</i-row>
						</i-tab>
						<i-tab
							class="_padding-top-2"
							title="Store data tamperproof"
						>
							<i-row
								class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
							>
								<i-column

									class="_display-flex _justify-content-center _align-items-center"
									xs="12"
									sm="12"
									md="12"
									lg="12"
								>
									<!-- eslint-disable -->
									<UiTerminal rounded language="go">
										key, value := []byte("client:Mr. Archibald Beatty"), []byte("Visa 6679499384784022 11/23")
										tx, err := client.VerifiedSet(ctx, key, value)
										if err != nil {
											exit(err)
										}
										fmt.Printf("VerifiedSet - entry successfully committed and verified: %v", tx)
									</UiTerminal>
									<!-- eslint-enable -->
								</i-column>
							</i-row>
						</i-tab>
						<i-tab
							class="_padding-top-2"
							title="Read verified data"
						>
							<i-row
								class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
							>
								<i-column

									class="_display-flex _justify-content-center _align-items-center"
									xs="12"
									sm="12"
									md="12"
									lg="12"
								>
									<!-- eslint-disable -->
									<UiTerminal rounded language="go">
										vEntry, err := client.VerifiedGet(ctx, key)
										if err != nil {
											exit(err)
										}
										fmt.Printf("VerifiedGet - entry was found and verified: %v", vEntry)
									</UiTerminal>
									<!-- eslint-enable -->
								</i-column>
							</i-row>
						</i-tab>
					</i-tabs>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbByDevelopersForDevelopers',
};
</script>

<style lang="scss">
#immudb-by-developers-for-developers {
	position: relative;
	background-color: var(--v-grey-lighten3);
	height: 0 !important;
	padding: 0 !important;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		top: -320px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	@media (max-width: $sm) {
		height: auto !important;
		margin-bottom: -260px;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			top: -352px;

			.row {
				.column {
					padding: 0 12px !important;
				}
			}
		}
	}

	.tabs {
		.button-group {
			position: relative;
			padding-top: 48px;

			.button {
				position: absolute;
				width: calc(33.33% - 8px);
				padding: 16px 0 40px 0;
				bottom: -28px;
				background-color: var(--v-blue-grey-lighten4);
				border-radius: 30px 30px 0 0;
				color: var(--v-primary-darken3);
				box-shadow: $cn-shadow-sm;
				border: none;
				z-index: 1;

				&.-active {
					background-color: #fff !important;
				}

				@media screen and (max-width: 380px) {
					font-size: 10px;
				}

				@media screen and (min-width: 381px) and (max-width: 430px) {
					font-size: 12px;
				}

				@media screen and (min-width: 431px) and (max-width: 485px) {
					font-size: 14px;
				}
			}

			.button:nth-child(2) {
				left: calc(33.33% + 4px);
			}

			.button:nth-child(3) {
				left: calc(66.66% + 8px);
			}
		}

		.tab {
			padding: 30px 0;
			border-radius: 30px;
			box-shadow: $cn-shadow-sm;
			border: none !important;
			z-index: 5;
		}
	}

	.terminal-wrapper {
		width: 94%;
	}

	@media (max-width: $sm) {
		.analyze-and-manage-tabs {
			.button-group {
				display: block;

				button {
					width: 100%;
				}
			}
		}
	}
}
</style>
