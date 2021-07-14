<template>
	<v-app-bar id="ztc-header">
		<img
			class="ztc-logo"
			src="/images/ztc/logo.png"
			alt="Zero-Trust Consortium"
		>

		<h1 class="d6">
			<span class="primary--text">Zero-Trust</span> Consortium
		</h1>
		<p class="description lead">
			A very fast consortium blockchain for the software industry
			with no transaction fees
		</p>

		<p class="action">
			<v-btn
				color="primary"
				@click="joinZtcModalVisible = true"
			>
				Join the consortium
				<JoinZtcModal
					v-model="joinZtcModalVisible"
				/>
			</v-btn>
		</p>
	</v-app-bar>
</template>

<script>
export default {
	name: 'ZtcHeader',
	data() {
		return {
			joinZtcModalVisible: false,
		};
	},
};
</script>

<style lang="scss">
#ztc-header {
	background-color: white;
	background-image: url('/images/ztc/header.jpg');
	background-position: right top;
	background-size: 75% auto;
	text-align: left;

	img {
		height: 140px;
		width: auto;
		display: block;
		margin: 0 0 1.5rem;
	}

	h1 {
		font-weight: bold;
	}

	.description {
		margin: 2rem 0;
		max-width: 35rem;
	}

	@media (max-width: $sm) {
		background-image: none;
		text-align: center;

		img {
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media screen and (min-width: 2280px) {
		background-size: 1560px auto;
	}
}
</style>
