export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	heroCardsSection: {
		cards: [
			{
				title: 'Trusted CI/CD',
				subtitle: 'Add to any DevOps process within minutes',
				imageUrl: '/images/placeholder.svg',
				actionText: 'WATCH VIDEO',
				href: 'https://www.youtube.com/watch?v=jNyAWlBfTTs',
				internalLink: null,
			},
			{
				title: 'Tutorial',
				subtitle: 'Getting Started with immudb in GO',
				imageUrl: '/images/placeholder.svg',
				actionText: 'READ BLOG',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'immudb-go-getting-started-video',
				},
			},
			{
				title: 'Trusted Machine Data',
				subtitle: 'Metrics, Telemetry and logs analytics',
				imageUrl: '/images/placeholder.svg',
				actionText: 'READ BLOG',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'codenotary-timestamp-service-for-devs',
				},
			},
		],
	},
	whatWeDoSection: {
		title: 'WHAT WE DO',
		subtitle: 'We develop and maintain the world’s fastest immutable database immudb, to bring trust to all your data by storing it immutable with client-cryptographic verification.',
		cards: [
			{
				title: 'Security',
				subtitle: 'Identify & Stop tampering',
				imageUrl: '/images/placeholder.svg',
			},
			{
				title: 'Compliance',
				subtitle: 'Accountable data',
				imageUrl: '/images/placeholder.svg',
			},
			{
				title: 'Dev Ops',
				subtitle: 'Trust process & artefacts',
				imageUrl: '/images/placeholder.svg',
			},
			{
				title: 'Collab',
				subtitle: 'Data in transit integrity',
				imageUrl: '/images/placeholder.svg',
			},
		],
	},
	benefitsSection: {
		title: 'Key benefits of using CodeNotary Ledger Compliance',
		slides: [
			{
				imageUrl: '/images/placeholder.svg',
				imageAlt: 'Placeholder Alt Text 2',
				imageLabel: 'INSPIRATION',
				href: null,
				internalLink: { type: 'blog-post', entry: 'the-trusted-CICD-pipeline' },
				title: 'Secure your CI/CD pipeline',
				list: [
					'Feature 1',
					'Feature 2',
				],
				actionText: 'Read More',
			},
			{
				imageUrl: '/images/placeholder.svg',
				imageAlt: 'Placeholder Alt Text 2',
				imageLabel: 'INSPIRATION 2',
				href: null,
				internalLink: { type: 'blog-post', entry: 'the-trusted-CICD-pipeline' },
				title: 'Secure your CI/CD pipeline 2',
				list: [
					'Feature 1',
					'Feature 2',
				],
				actionText: 'Read More 2',
			},
			{
				imageUrl: '/images/placeholder.svg',
				imageAlt: 'Placeholder Alt Text 3',
				imageLabel: 'INSPIRATION 3',
				href: null,
				internalLink: { type: 'blog-post', entry: 'the-trusted-CICD-pipeline' },
				title: 'Secure your CI/CD pipeline 3',
				list: [
					'Feature 1',
					'Feature 2',
				],
				actionText: 'Read More 3',
			},
		],
	},
	newsletterSection: {
		title: 'Subscribe to Our Newsletter',
		subtitle: 'Get the latest product updates, company news, and special offers delivered right to your inbox.',
		emailPlaceholder: 'Enter your email',
		actionText: 'SUBSCRIBE',
	},
};
