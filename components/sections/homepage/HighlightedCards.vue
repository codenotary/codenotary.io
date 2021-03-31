<template>
	<i-container class="highlighted-cards">
		<highlighted-card
			title="Trusted CI/CD"
			subtitle="Add to any DevOps process within minutes"
			image-url="/images/placeholder.svg"
		>
			<cn-button slot="action" link variant="dark" href="https://www.youtube.com/watch?v=jNyAWlBfTTs">
				WATCH VIDEO
			</cn-button>
		</highlighted-card>

		<highlighted-card
			title="Tutorial"
			subtitle="Getting Started with immudb in GO"
			image-url="/images/placeholder.svg"
		>
			<cn-button slot="action" link variant="dark" :to="{ name: 'blog-post', params: { post: 'immudb-go-getting-started-video' }}">
				READ BLOG
			</cn-button>
		</highlighted-card>

		<highlighted-card
			title="Trusted Machine Data"
			subtitle="Metrics, Telemetry and logs analytics"
			image-url="/images/placeholder.svg"
		>
			<cn-button slot="action" link variant="dark" :to="{ name: 'blog-post', params: { post: 'codenotary-timestamp-service-for-devs' }}">
				READ BLOG
			</cn-button>
		</highlighted-card>
	</i-container>
</template>

<script>
export default {
	name: 'HighlightedCards',
};
</script>

<style lang="scss" scoped>
.highlighted-cards {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex: 1 0 100%;
	flex-wrap: wrap;

	& > * {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}

	body {
		color: red;
	}

	@media only screen and (min-width: 999px) {
		& {
			margin-top: -80px;
			margin-bottom: 32px;
		}
	}
}
</style>
