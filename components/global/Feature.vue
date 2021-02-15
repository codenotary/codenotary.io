<template>
	<i-container
		class="feature"
		data-aos="fade-zoom-in"
	>
		<i-row
			class="_display-flex _flex-direction-xs-column _flex-direction-sm-row"
			:class="`_flex-direction-md-row${ getContentSide === 'right' ? '' : '-reverse' }`"
		>
			<i-column
				class="_margin-bottom-4 _margin-sm-bottom-0 _margin-0 _padding-0"
				xs="12" sm="4"
				md="4" lg="5"
				xl="6"
			>
				<img
					v-if="image"
					class="image -responsive _margin-y-0 _margin-x-auto"
					:class="{
						[`_padding-${ getContentSide }-xs-0`]: true,
						[`_padding-${ getContentSide }-sm-2`]: true,
						[`_padding-${ getContentSide }-md-2`]: true,
						[`_padding-${ getContentSide }-lg-2`]: true,
						[`_padding-${ getContentSide }-xl-2`]: true,
					}"
					:src="image"
					:alt="title"
				>
			</i-column>
			<i-column
				class="_margin-0 _padding-0"
				xs="12" sm="8"
				md="8" lg="7"
				xl="6"
			>
				<h3
					v-if="title"
					class="_margin-0 -title _text-left _text-gray-80 _font-weight-bold"
				>
					{{ title }}
				</h3>
				<p
					v-if="hasDefaultSlot"
					class="_margin-top-1 -body-1 _text-left"
				>
					<slot />
				</p>
				<div class="_visible-lg-and-up">
					<i-row
						v-if="innerContent && innerContent.length > 0"
						class="_margin-top-2 _display-flex _justify-content-space-between"
					>
						<i-column
							v-for="(item, idx) in innerContent"
							:key="`inner-content-${ idx }`"
							xs="12" sm="6"
						>
							<div
								v-if="item"
								class="inner-content-box _padding-1"
								data-aos="fade-zoom-in"
								:data-delay="600"
							>
								<h5
									v-if="item.title"
									class="_margin-0 -title-1 _text-left _text-primary _font-weight-bold"
								>
									{{ item.title }}
								</h5>
								<p
									v-if="item.text"
									class="_margin-y-1-2 -body-1 _text-left _text-grey-60"
								>
									{{ item.text }}
								</p>
							</div>
						</i-column>
					</i-row>
				</div>
			</i-column>
		</i-row>
		<div class="_visible-md-and-down">
			<i-row
				v-if="innerContent && innerContent.length > 0"
				class="_margin-top-2 _display-flex _justify-content-space-between"
			>
				<i-column
					v-for="(item, idx) in innerContent"
					:key="`inner-content-${ idx }`"
					class="_margin-bottom-1"
					xs="12" sm="6"
				>
					<div
						v-if="item"
						class="inner-content-box _padding-1"
						data-aos="fade-zoom-in"
						:data-delay="600"
					>
						<h5
							v-if="item.title"
							class="_margin-0 -title-1 _text-left _text-primary _font-weight-bold"
						>
							{{ item.title }}
						</h5>
						<p
							v-if="item.text"
							class="_margin-y-1-2 -body-1 _text-left _text-grey-60"
						>
							{{ item.text }}
						</p>
					</div>
				</i-column>
			</i-row>
		</div>
		<i-row
			v-if="hasButtonSlot"
			class="cta-wrapper _margin-top-2 _margin-sm-top-4 _display-flex _justify-content-center _align-items-center"
		>
			<slot name="button" />
		</i-row>
	</i-container>
</template>

<script>
const CONTENT_SIDES = ['left', 'right'];

export default {
	name: 'Feature',
	props: {
		headline: {
			type: String,
			default: '',
		},
		contentSide: {
			type: String,
			default: 'right',
		},
		title: {
			type: String,
			default: '',
		},
		innerContent: {
			type: Array,
			default: () => {},
		},
		image: {
			type: String,
			default: '',
		},
	},
	computed: {
		getContentSide () {
			if (CONTENT_SIDES.includes(this.contentSide)) {
				return this.contentSide;
			}
			return 'right';
		},
		hasDefaultSlot () {
			return !!this.$slots.default;
		},
		hasButtonSlot () {
			return !!this.$slots.button;
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.feature {
	width: 100%;

	.title {
		font-weight: bold;
		color: $color-primary;
	}

	img {
		display: block;
		height: 100%;
		min-height: 280px;
		max-height: 320px;
		width: auto;
		margin: 0 auto;
		object-fit: contain;
	}

	p {
		font-weight: 300;
		color: $color-dark;
	}

	.inner-content-box {
		display: flex !important;
		flex-direction: column;
		height: 100%;
		min-height: 140px;
		border-radius: $spacer-1-4;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05) !important;
	}

	.cta-wrapper {
		button {
			padding: $spacer-1 $spacer-4;
			color: white;
			border-radius: 50%;
		}
	}
}
</style>
