export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	headerSection: {
		title1: 'immudb', // +
		title2: 'world\'s fastest <span class="cn-text-secondary">immutable</span> database', // +
		title3: 'Open Source and easy to use in new applications and easy to integrate into existing application.', // +
	},
	aboutImmudbSection: {
		title: 'About immudb',
		cards: [
			{
				title: 'Immutable',
				imageUrl: '/icons/immutable.svg',
				subtitles: [
					[
						{
							type: 'bold',
							text: 'Any kind of key-value',
						},
						{
							type: 'bold',
							text: 'or relational data.',
						},
						{
							type: 'regular',
							text: 'Clients can choose how to',
						},
						{
							type: 'regular',
							text: 'structure data.',
						},
					],
					[
						{
							type: 'bold',
							text: 'No data mutation APIs',
						},
						{
							type: 'regular',
							text: 'are provided',
						},
					],
					[
						{
							type: 'bold',
							text: 'Data is never overwritten,',
						},
						{
							type: 'regular',
							text: 'so multiple versions of the same',
						},
						{
							type: 'regular',
							text: 'key co-exist and are verifiable.',
						},
					],
				],
			},
			{
				title: 'Auditable',
				imageUrl: '/icons/auditable.svg',
				subtitles: [
					[
						{
							type: 'bold',
							text: 'Tamper-evident history system.',
						},
					],
					[
						{
							type: 'regular',
							text: 'Clients and auditors want',
						},
						{
							type: 'bold',
							text: 'cryptographic proof',
							nobreak: true,
						},
						{
							type: 'regular',
							text: 'of',
						},
						{
							type: 'regular',
							text: 'data inclusion and historical',
						},
						{
							type: 'regular',
							text: 'consistency in real time.',
						},
					],
					[
						{
							type: 'regular',
							text: 'If tampered, clients and',
						},
						{
							type: 'regular',
							text: 'auditors will',
							nobreak: true,
						},
						{
							type: 'bold',
							text: 'notice',
							nobreak: true,
						},
						{
							type: 'regular',
							text: 'that and',
						},
						{
							type: 'regular',
							text: 'take actions.',
						},
					],
				],
			},
			{
				title: 'Secure',
				imageUrl: '/icons/security.svg',
				subtitles: [
					[
						{
							type: 'regular',
							text: 'Data ownership is verifiable',
						},
						{
							type: 'regular',
							text: 'by clients and auditors.',
						},
					],
					[
						{
							type: 'regular',
							text: 'Sign your data using',
						},
						{
							type: 'bold',
							text: 'Public-Key Cryptography.',
						},
						{
							type: 'regular',
							text: 'Support for Intel SGX enclaves.',
						},
					],
					[
						{
							type: 'regular',
							text: 'Keys additions and revocations',
						},
						{
							type: 'regular',
							text: 'are immutably stored in the database.',
						},
					],
				],
			},
		],
	},
};
