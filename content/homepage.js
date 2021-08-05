export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	headerSection: {
		title1: 'Protect',
		title2: 'your software development pipeline',
		title3: 'from supply chain attacks',
		subtitle: 'Trust, integrity, and an auditable bill of material for all identities and artifacts of your software supply chain.',
	},
	cnilSection: {
		title: 'CodeNotary Immutable Ledger',
		cards: [
			{
				bigTitle: 'CNIL',
				smallTitle: 'Cloud',
				description: 'Trusted CI/CD, SBOM and artifact protection as a service that allows public verification.',
				actionButton: {
					text: 'Discover CNIL Cloud',
					to: {
						path: '/products/ci-cd',
					},
				},
				image: '/images/cnil-cloud.png',
				primaryTextColor: 'blue',
			},
			{
				bigTitle: 'CNIL',
				smallTitle: 'Metrics & Logs',
				description: 'Self-Hosted performance monitoring and compliant log analysis for VMware vSphere, container and much more.',
				actionButton: {
					text: 'Discover Metrics & Logs',
					to: {
						path: '/products/immutable-ledger-metrics-and-logs',
					},
				},
				image: '/images/cnil-metrics-logs.png',
				primaryTextColor: 'green',
			},
		],
	},
	builtOnSection: {
		title1: 'immudb',
		title2: 'built on the fastest<br><span class="cn-text-secondary">immutable</span> ledger technology',
		title3: 'Open Source and easy to use in new applications and easy to integrate into existing application.',
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
		subtitle: 'We bring trust and integrity into the software supply chain by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies.',
		cards: [
			{
				title: 'Security',
				subtitle: 'Identify & stop tampering',
				imageUrl: '/icons/security.svg',
			},
			{
				title: 'Compliance',
				subtitle: 'Accountable data for all pipelines',
				imageUrl: '/icons/compliance.svg',
			},
			{
				title: 'DevOps',
				subtitle: 'Trusted processes & artifacts',
				imageUrl: '/icons/dev-ops.svg',
			},
			{
				title: 'Supply Chain',
				subtitle: 'Bill of material for your workload',
				imageUrl: '/icons/collab.svg',
			},
		],
	},
	benefitsSection: {
		title: 'Key benefits of using CodeNotary Immutable Ledger',
		cards: [
			{
				iconName: '/icons/pipeline.svg',
				title: 'Complete & Fully Trusted Pipeline',
				subtitle: 'Tamperproof bill of material for your workloads, all input data is cryptographically verified. Zero Trust DevOps pipeline.',
				backgroundColor: 'brand',
			},
			{
				iconName: '/icons/tracking.svg',
				title: 'Provenance & Tracking',
				subtitle: 'Spot foreign objects and keep provenance, given the inventory of the objects you own.',
				backgroundColor: 'primary',
			},
			{
				iconName: '/icons/granularity.svg',
				title: 'Granular Revocation',
				subtitle: 'Independent verification of artifacts, actions, and dependencies which can be revoked separately.',
				backgroundColor: 'secondary',
			},
			{
				iconName: '/icons/storage.svg',
				title: 'High-performance Immutable Storage',
				subtitle: 'High-performance immutable ledger that cannot be manipulated, with cryptographic verification.',
				backgroundColor: 'cyan',
			},
		],
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
					/*
					{
						label: 'CNIL (Self-Hosted)', internalLink: '/products/immutable-ledger', href: null,
					},
					*/
					{
						label: 'CNIL Cloud', internalLink: '/products/ci-cd', href: null,
					},
					{
						label: 'CNIL Metrics & Logs', internalLink: '/products/immutable-ledger-metrics-and-logs', href: null,
					},
				],
			},
			{
				title: 'RESOURCES',
				links: [
					{
						label: 'Videos', internalLink: null, href: 'https://www.youtube.com/channel/UCYDMxKTM74Acj8LerGrjUuw/videos', target: '_blank',
					},
					{
						label: 'Blogs', internalLink: '/blog', href: null,
					},
					{
						label: 'RSS', internalLink: null, href: '/feed.xml', target: '_blank',
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
