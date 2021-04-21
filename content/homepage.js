export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	headerSection: {
		title: 'End-to-end tamperproof protection for your software development cycle',
		subtitle: 'Add trust, integrity, and transparency for all identities and artifacts to your CI/CD pipelines in a heartbeat.'
	},
	heroCardsSection: {
		cards: [
			{
				title: 'Modern Code Signing',
				subtitle: 'Why the modern way of code signing using CodeNotary is important for a secure software supply chain',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Read The Blog',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'solarwinds-sunburst',
				},
			},
			{
				title: 'Your CI/CD Flight Recorder',
				subtitle: 'Learn how to record your code, artifacts and CI/CD steps immutable',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Read The Blog',
				href: null,
				internalLink: {
					type: 'blog-post',
					entry: 'the-trusted-CICD-pipeline',
				},
			},
			{
				title: 'GitHub Actions and CodeNotary',
				subtitle: 'Learn how to fully automate your software notarization and authentication process',
				imageUrl: '/images/placeholder.svg',
				actionText: 'Watch Video',
				href: 'https://www.youtube.com/watch?v=cz79rtrz9ZQ',
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
				subtitle: 'Accountable Data',
				imageUrl: '/images/features/compliance.svg',
			},
			{
				title: 'Dev Ops',
				subtitle: 'Trusted Processes & Artifacts',
				imageUrl: '/images/features/dev-ops.svg',
			},
			{
				title: 'Collab',
				subtitle: 'Data In Transit Integrity',
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
		actionText: 'Subscribe',
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
