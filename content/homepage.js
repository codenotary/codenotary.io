export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	heroCardsSection: {
		cards: [
			{
				title: 'Trusted CI/CD',
				subtitle: 'Add CodeNotary within minutes to secure your supply chain',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Read The Blog',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'solarwinds-sunburst',
				},
			},
			{
				title: 'Transactional Ledger',
				subtitle: 'Record your code, artefacts and CI/CD steps immutable',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Read The Blog',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'the-trusted-CICD-pipeline',
				},
			},
			{
				title: 'Software Provenance',
				subtitle: 'Maintain an auditable chronology of the code and artefact ownership',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Watch Video',
				href: 'https://www.youtube.com/watch?v=jNyAWlBfTTs',
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
				imageUrl: '/images/features/security.svg',
			},
			{
				title: 'Compliance',
				subtitle: 'Accountable data',
				imageUrl: '/images/features/compliance.svg',
			},
			{
				title: 'Dev Ops',
				subtitle: 'Trust process & artefacts',
				imageUrl: '/images/features/dev-ops.svg',
			},
			{
				title: 'Collab',
				subtitle: 'Data in transit integrity',
				imageUrl: '/images/features/collab.svg',
			},
		],
	},
	benefitsSection: {
		title: 'Key benefits of using CodeNotary Ledger Compliance',
		slides: [
			{
				imageUrl: '/images/our_solutions.jpg',
				imageAlt: 'Our Solutions',
			},
			// EXAMPLE OF LIST OF SLIDES
			// {
			// 	imageUrl: '/images/our_solutions.jpg',
			// 	imageAlt: 'Our Solutions',
			// },
			// {
			// 	imageUrl: '/images/our_solutions.jpg',
			// 	imageAlt: 'Our Solutions',
			// },
			// {
			// 	imageUrl: '/images/our_solutions.jpg',
			// 	imageAlt: 'Our Solutions',
			// },
		],
		/* OLD VERSION
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
		*/
	},
	newsletterSection: {
		title: 'Subscribe to Our Newsletter',
		subtitle: 'Get the latest product updates, company news, and special offers delivered right to your inbox.',
		emailPlaceholder: 'Enter your email',
		actionText: 'SUBSCRIBE',
	},
	footer: {
		tables: [
			{
				title: 'PRODUCTS',
				links: [
					{
						label: 'CNLC CI/CD', internalLink: '/products/ledger-compliance', href: null,
					},
					{
						label: 'CNLC Public', internalLink: '/products/ci-cd', href: null,
					},
					{
						label: 'CNLC Metrics & Logs', internalLink: '/products/ledger-compliance-metrics-and-logs', href: null,
					},
				],
			},
			{
				title: 'RESOURCES',
				links: [
					{
						label: 'Videos', internalLink: null, href: 'https://www.youtube.com/channel/UCYDMxKTM74Acj8LerGrjUuw/videos',
					},
					{
						label: 'Blogs', internalLink: '/blog', href: null,
					},
					{
						label: 'Whitepapers', internalLink: '/', href: null,
					},
				],
			},
			{
				title: 'COMPANY',
				links: [
					{
						label: 'About Us', internalLink: '/about', href: null,
					},
					{
						label: 'Join Us', internalLink: '/join', href: null,
					},
					{
						label: 'Partners', internalLink: '/partners', href: null,
					},
					{
						label: 'Contact', internalLink: '/contact', href: null,
					},
				],
			},
		],
	},
};
