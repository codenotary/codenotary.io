<template>
	<v-container fluid class="dark-blue">
		<v-container>
			<v-row class="py-5">
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
						v-for="({ title, path }, index) in internalLinks"
						:key="title"
						v-slot="{ hover }"
					>
						<a
							:href="`//codenotary.com/${ path }`"
							:class="[
								hover ? 'secondary--text text-decoration-underline' : 'accent--text',
								{
									'ml-6': index > 0
								}
							]"
						>
							{{ title }}
						</a>
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
					path: 'terms-of-service',
				},
				{
					title: 'Privacy statement',
					path: 'privacy-statement',
				},
			],
		};
	},
};
</script>
