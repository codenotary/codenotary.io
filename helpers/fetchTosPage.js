export const fetchTosPage = (dir, page) => async ({ $content, params }) => {
	const article = await $content(dir, page || params.slug).fetch();
	const articles = await $content('terms-of-service', { deep: true })
			.only(['title', 'path', 'slug'])
			.where({ slug: { $ne: 'index' } })
			.fetch();

	return {
		article,
		articles,
	};
};
