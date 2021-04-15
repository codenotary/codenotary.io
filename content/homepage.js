export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	heroCardsSection: {
		cards: [
			{
				title: 'Trusted CI/CD',
				subtitle: 'Add CodeNotary within minutes to secure your software supply chain',
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
				subtitle: 'Record your code, artifacts and CI/CD steps immutable',
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
				subtitle: 'Maintain an auditable chronology of the code and artifact ownership',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Watch Video',
				href: 'https://www.youtube.com/watch?v=jNyAWlBfTTs',
			},
		],
	},
	whatWeDoSection: {
		title: 'WHAT WE DO',
		subtitle: 'We bring trust and integrity into the software life cycle by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies.',
		cards: [
			{
				title: 'Security',
				subtitle: 'Identify & stop tampering',
				imageUrl: '/images/features/security.svg',
			},
			{
				title: 'Compliance',
				subtitle: 'Accountable data for all pipelines',
				imageUrl: '/images/features/compliance.svg',
			},
			{
				title: 'DevOps',
				subtitle: 'Trusted processes & artifacts',
				imageUrl: '/images/features/dev-ops.svg',
			},
			{
				title: 'Supply Chain',
				subtitle: 'Bill of material for your workload',
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
						label: 'CNLC (Self-Hosted)', internalLink: '/products/ledger-compliance', href: null,
					},
					{
						label: 'CNLC (Cloud)', internalLink: '/products/ci-cd', href: null,
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
						label: 'immudb', internalLink: '/technologies/immudb', href: null,
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
