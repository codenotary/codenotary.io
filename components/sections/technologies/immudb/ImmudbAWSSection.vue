<template>
	<PageSection
		id="immudb-aws-section"
		:top="0"
		:bottom="0"
	>
		<i-container class="floating-container">
			<i-row>
				<i-column class="_padding-x-0">
					<div class="content-box">
						<p class="_text-uppercase cn-text-white _text-center _font-weight-bold">
							immudb is available in:
						</p>
						<img src="/images/immudb/AWS/marketplace.svg" alt="AWS marketplace">
						<cn-button
							link
							:href="awsMarketplaceLink"
							rel="noopener nofollow"
							target="_blank"
						>
							Check It Out
						</cn-button>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ImmudbAWSSection',
	data() {
		return {
			awsMarketplaceLink: 'https://aws.amazon.com/marketplace/pp/prodview-cctrj4cvxmzvq?sr=0-1&ref_=beagle&applicationId=AWSMPContessa',
		};
	},
};
</script>

<style lang="scss">
#immudb-aws-section {
	background-color: $cn-color-background;

	.content-box {
		background-image: url(/images/immudb/AWS/desktop.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		height: 170px;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
		border-radius: 30px;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 25px 0 20px;
		border: 1px solid white;

		@media screen and (max-width: $mobile-max-width) {
			background-image: url(/images/immudb/AWS/tablet.png);
			height: 150px;
			background-position-y: bottom;
			padding: 10px 0;
		}

		@media screen and (max-width: 767px) {
			background-image: url(/images/immudb/AWS/mobile.jpg);
			height: 320px;
			background-position-y: bottom;
		}

		p {
			margin: 0;
		}

		img {
			max-width: 300px;
			transition: transform 100ms linear;

			&:hover {
				transform: scale(1.02);
			}
		}
	}
}
</style>
