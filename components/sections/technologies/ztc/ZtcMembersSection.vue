<template>
	<page-section id="ztc-members-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="Founding Members" block />
				</i-column>
			</i-row>
			<i-row class="ztc-members-list">
				<i-column sm="4" md="3">
					<nuxt-link :to="{ name: 'about' }">
						<img
							src="/images/ztc/members/codenotary.png" alt="CodeNotary"
							class="image -responsive"
						>
					</nuxt-link>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.acronis.com/en-us/" rel="nofollow">
						<img
							src="/images/ztc/members/acronis.png" alt="Acronis"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://chainstack.com/" rel="nofollow">
						<img
							src="/images/ztc/members/chainstack.png" alt="Chainstack"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="http://www.ta.capital/" rel="nofollow">
						<img
							src="/images/ztc/members/tacapital.png" alt="TA Capital"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.opvizor.com/" rel="nofollow">
						<img
							src="/images/ztc/members/opvizor.png" alt="Opvizor"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.dzlabs.ch/" rel="nofollow">
						<img
							src="/images/ztc/members/dzlabs.png" alt="DZlabs"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.c99.at/" rel="nofollow">
						<img
							src="/images/ztc/members/c99.png" alt="C99"
							class="image -responsive"
						>
					</a>
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<page-section-header
						class="_margin-top-5" title="Non-Founding Members"
						block
					/>
				</i-column>
			</i-row>
			<i-row class="ztc-members-list">
				<i-column sm="4" md="3">
					<a href="https://www.dogado.de/" rel="nofollow">
						<img
							src="/images/ztc/members/dogado.png" alt="Dogado"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.tinaba.bancaprofilo.it/" rel="nofollow">
						<img
							src="/images/ztc/members/tinaba.png" alt="tinaba"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.greentube.com/" rel="nofollow">
						<img
							src="/images/ztc/members/greentube.png" alt="green tube"
							class="image -responsive -vertical"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.cloud-r.eu/en" rel="nofollow">
						<img
							src="/images/ztc/members/cloudr.png" alt="cloud-R"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.uni-leipzig.de/en/" rel="nofollow">
						<img
							src="/images/ztc/members/unileipzig.png" alt="Uni Leipzig"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.webscience.it/" rel="nofollow">
						<img
							src="/images/ztc/members/webscience.png" alt="webscience"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="http://www.barrco-llc.com/" rel="nofollow">
						<img
							src="/images/ztc/members/barrco.png" alt="barrco"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.wu.ac.at/" rel="nofollow">
						<img
							src="/images/ztc/members/wienuniversity.png" alt="Wien University"
							class="image -responsive -vertical"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://www.esoftthings.com/en/" rel="nofollow">
						<img
							src="/images/ztc/members/esoftthings.jpg" alt="eSoftThings"
							class="image -responsive -vertical"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="https://talixo.com/" rel="nofollow">
						<img
							src="/images/ztc/members/talixo.png" alt="talixo"
							class="image -responsive"
						>
					</a>
				</i-column>
				<i-column sm="4" md="3">
					<a href="http://chemiumcorp.com/" rel="nofollow">
						<img
							src="/images/ztc/members/chemiumcorp.png" alt="Chemium Corp"
							class="image -responsive -vertical"
						>
					</a>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-members-section {
	background-color: $color-white;
}

.ztc-members-list {
	display: flex;
	justify-content: center;

	.column {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image {
		max-width: 100%;
		width: 150px;
		height: auto;
		margin: 0 auto 1rem;

		&.-vertical {
			width: 100px;
		}
	}
}
</style>
