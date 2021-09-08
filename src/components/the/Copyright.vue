<template>
	<v-container fluid class="dark-blue">
		<v-container>
			<v-row>
				<v-col
					cols="12"
					md="8"
				>
					<p class="white--text text-center text-md-left ma-0">
						Copyright &copy; {{ new Date().getFullYear() }} CodeNotary, Inc. All rights reserved.
					</p>
				</v-col>
				<v-col
					cols="12"
					md="4"
					class="d-flex justify-space-around justify-md-start"
				>
					<v-hover
						v-for="({ title, to }, index) in internalLinks"
						:key="title"
						v-slot="{ hover }"
					>
						<nuxt-link
							:to="to"
							:class="[
								hover ? 'secondary--text text-decoration-underline' : 'accent--text',
								{
									'ml-6': index > 0
								}
							]"
						>
							{{ title }}
						</nuxt-link>
					</v-hover>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>

export default {
	name: 'TheCopyright',
	data() {
		return {
			internalLinks: [
				{
					title: 'Terms of Service',
					to: '/terms-of-service',
				},
				{
					title: 'Privacy statement',
					to: '/privacy-statement',
				},
			],
		};
	},
};
</script>
