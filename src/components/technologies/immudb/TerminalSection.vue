<template>
	<!-- <UiPageSection id="immudb-code-examples-section">
		<v-container class="floating-container _padding-x-4">
			<v-row>
				<v-col>
					<div>
						<VueSlickCarousel v-bind="settings">
							<div>
								<v-row middle>
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title font-weight-bold primary--text">
											Very high throughput, immutable database with cryptographic verification
										</h4>
										<p class="lead">
											immudb is an indispensable asset when it comes to tamper-proof data:
										</p>
										<ul>
											<li>Store every update to sensitive database fields (credit card or bank account data) of an existing application database</li>
											<li>Store CI/CD recipes to build and deployment pipelines</li>
											<li>Store public certificates</li>
											<li>Store tamper-proof log streams (i. e. audit logs)</li>
										</ul>
									</v-col>
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<UiTerminal rounded language="go">
											// Store any key, value auditproof and tamperproof
											key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
											verifiedIndex, err := client.SafeSet(ctx, key2, value2)

											if err != nil {
												exit(err)
											}

											fmt.Println("   SafeSet - add and verify entry:")
											printItem(key2, value2, verifiedIndex)
										</UiTerminal>
									</v-col>
								</v-row>
							</div>
							<div>
								<v-row middle class="pa-4">
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title font-weight-bold primary--text">
											Intuitive setup
										</h4>
										<p class="lead">
											immudb is built with simplicity in mind:
										</p>
										<ul>
											<li>Use the prebuilt binaries or Docker container images for a fast start</li>
											<li>Install, manage and run immudb and immugw as services (use 'immuadmin service')</li>
											<li>Simple make command integration if you want to build the applications yourself</li>
											<li>RESTful interfaces and easy to use clients</li>
											<li>Combine with any existing application</li>
										</ul>
									</v-col>
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<UiTerminal rounded language="bash">
											# install immudb service
											./immuadmin service immudb install

											# check current immudb service status
											./immuadmin service immudb status

											# install immugw service
											./immuadmin service immugw install

											# check immugw service
											./immuadmin service immugw status
										</UiTerminal>
									</v-col>
								</v-row>
							</div>
							<div>
								<v-row middle class="pa-4">
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<h4 class="title font-weight-bold primary--text">
											Consistency check built-in
										</h4>
										<p class="lead">
											immudb architecture has built-in verification and audit functionality:
										</p>
										<ul>
											<li>immudb server is continuously checking disk/memory consistency</li>
											<li>immugw is continuously checking the data consistency and integrity</li>
											<li>immuclient has built-in data consistency and integrity checks</li>
											<li>API's provide data ownership proof, verification and integrity functions</li>
										</ul>
									</v-col>
									<v-col
										xs="12"
										sm="12"
										md="6"
									>
										<UiTerminal rounded language="go">
												// built-in verification for every entry
												verifiedItem, err := client.SafeGet(ctx, key2)

												if err != nil {
														exit(err)
												}

												fmt.Println("   SafeGet - fetch and verify entry:")
												printItem(nil, nil, verifiedItem)
										</UiTerminal>
									</v-col>
								</v-row>
							</div>
							<template #prevArrow>
								<div class="custom-arrow d-flex justify-center align-center">
									<img class="cn-icon" src="/icons/carousel-arrow-left.svg">
								</div>
							</template>
							<template #nextArrow>
								<div class="custom-arrow d-flex justify-center align-center">
									<img class="cn-icon" src="/icons/carousel-arrow-right.svg">
								</div>
							</template>
							<template #customPaging>
								<div class="custom-dot" />
							</template>
						</VueSlickCarousel>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection> -->
	<v-container>
		<v-carousel
			v-model="activeSlideIndex"
			class="white rounded-xl"
			hide-delimiters
			height="450"
		>
			<v-carousel-item
				v-for="slide in slides"
				:key="slide.title"
				class="px-16"
			>
				<v-row class="fill-height">
					<v-col class="d-flex flex-column justify-center">
						<h4 class="text-h4 brand--text font-weight-700">
							{{ slide.title }}
						</h4>
						<p class="font-weight-400 mt-4">
							{{ slide.description }}
						</p>
						<ul class="slide-rows pl-4">
							<li v-for="row in slide.rows" :key="row">
								{{ row }}
							</li>
						</ul>
					</v-col>
					<v-col class="d-flex flex-column justify-center">
						<UiTerminal :language="slide.terminal.language">
							{{ slide.terminal.content }}
						</UiTerminal>
					</v-col>
				</v-row>
			</v-carousel-item>
			<div class="delimeters d-flex justify-center">
				<div
					v-for="(slide, index) in slides"
					:key="slide.title"
					class="delimeter"
					:class="{ active: activeSlideIndex === index, 'ml-2': index > 0 }"
					@click="activeSlideIndex = index"
				/>
			</div>
			<template #prev="{ on, attrs }">
				<v-img
					src="/icons/carousel-arrow-left.svg"
					contain
					height="70"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #next="{ on, attrs }">
				<v-img
					src="/icons/carousel-arrow-right.svg"
					contain
					height="70"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</v-carousel>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbTerminalSection',
	data() {
		return {
			// settings: {
			// 	slidesToShow: 1,
			// 	arrows: true,
			// 	dots: true,
			// 	focusOnSelect: true,
			// 	lazyLoad: 'progressive',
			// },
			activeSlideIndex: 0,
			slides: [
				{
					title: 'Very high throughput, immutable database with cryptographic verification',
					description: 'immudb is an indispensable asset when it comes to tamper-proof data:',
					rows: [
						'Store every update to sensitive database fields (credit card or bank account data) of an existing application database',
						'Store CI/CD recipes to build and deployment pipelines',
						'Store public certificates',
						'Store tamper-proof log streams (i. e. audit logs)',
					],
					terminal: {
						language: 'go',
						content: `
							// Store any key, value auditproof and tamperproof
							key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
							verifiedIndex, err := client.SafeSet(ctx, key2, value2)

							if err != nil {
								exit(err)
							}

							fmt.Println("   SafeSet - add and verify entry:")
							printItem(key2, value2, verifiedIndex)`,
					},
				},
				{
					title: 'Intuitive setup',
					description: 'immudb is an indispensable asset when it comes to tamper-proof data:',
					rows: [
						'Store every update to sensitive database fields (credit card or bank account data) of an existing application database',
						'Store CI/CD recipes to build and deployment pipelines',
						'Store public certificates',
						'Store tamper-proof log streams (i. e. audit logs)',
					],
					terminal: {
						language: 'go',
						content: `
							// Store any key, value auditproof and tamperproof
							key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
							verifiedIndex, err := client.SafeSet(ctx, key2, value2)

							if err != nil {
								exit(err)
							}

							fmt.Println("   SafeSet - add and verify entry:")
							printItem(key2, value2, verifiedIndex)`,
					},
				},
				{
					title: 'Consistency check built-in',
					description: 'immudb is an indispensable asset when it comes to tamper-proof data:',
					rows: [
						'Store every update to sensitive database fields (credit card or bank account data) of an existing application database',
						'Store CI/CD recipes to build and deployment pipelines',
						'Store public certificates',
						'Store tamper-proof log streams (i. e. audit logs)',
					],
					terminal: {
						language: 'go',
						content: `
							// Store any key, value auditproof and tamperproof
							key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
							verifiedIndex, err := client.SafeSet(ctx, key2, value2)

							if err != nil {
								exit(err)
							}

							fmt.Println("   SafeSet - add and verify entry:")
							printItem(key2, value2, verifiedIndex)`,
					},
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.slide-rows {
	li::marker {
		color: var(--v-secondary-base);
	}
}

.delimeters {
	position: absolute;
	bottom: 10px;
	width: 100%;

	.delimeter {
		background: var(--v-info-base);
		height: 15px;
		width: 15px;
		border-radius: 50%;
		cursor: pointer;
		border: 1px solid var(--v-brand-base);

		&.active {
			background: var(--v-accent-base);
		}
	}
}
</style>
