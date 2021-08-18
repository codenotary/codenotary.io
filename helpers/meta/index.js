const KEYWORDS = [
	'CodeNotary',
	'CodeNotary Cloud',
	'CodeNotary Immutable',
	'Cloud',
	'Immutable Ledger',
	'using CodeNotary',
	'Ledger',
	'Immutable',
	'immudb',
	'immutable database',
	'cryptographic proof',
	'Ledger Technology',
	'High-performance immutability',
	'Tamperproof',
	'DevOps',
	'DevSecOps',
	'Trusted Pipeline',
	'SBOM',
	'BOM',
	'Bill of Material',
	'Software Bill of Material',
	'build verification',
	'container verification',
	'image verification',
	'SDLC evidence',
	'software evidence',
	'pipeline evidence',
	'secure pipeline',
	'artifact protection',
	'secure artifact',
	'artifact tracking',
	'build tracking',
	'dependency tracking',
	'software quality',
	'software vulnerability',
	'Malicious code',
	'detect malicious code',
	'detect tampering',
	'software supply chain',
	'protect software supply chain',
	'signed software supply chain',
	'signed pipeline',
	'signed digital asset',
	'digital certificate',
	'certificate revocation',
	'trusted CI/CD',
	'cicd',
	'trusted cicd',
	'client verifiable',
];

export const DEFAULT_META = {
	TYPE: 'website',
	URL: 'https://codenotary.com',
	SITE_URL: 'https://codenotary.com',
	TITLE: 'Immutable Recording of Data and Processes - CodeNotary',
	SITE_NAME: 'CodeNotary',
	AUTHOR: 'CodeNotary',
	HANDLE: '@CodeNotary',
	DESCRIPTION: `Immutable recording of data and processes with CodeNotary Immutable Ledger®. On-premise or in the cloud, easy to use tamperproof ledger with cryptographic verification, processing millions of transactions a second. ${ KEYWORDS.join(',') }`,
	MAIN_IMAGE: '/images/immudb_social_preview.gif',
	KEYWORDS,
};
export * from './title';
export * from './meta';
