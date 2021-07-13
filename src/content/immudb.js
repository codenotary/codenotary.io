export default {
	// HomePage | Cards located under the main Hero Section (Title, CTAs and Video)
	headerSection: {
		title1: 'immudb', // +
		title2: 'world\'s fastest <span class="cn-text-secondary">immutable</span> database', // +
		title3: 'Open Source and easy to use in new applications and easy to integrate into existing application.', // +
	},
	heroCardsSection: {
		title: 'About immudb',
		cards: [
			{
				title: 'Immutable',
				subtitle: `
					<p>
						<b>Any kind of key-value or relational data.</b><br>
						Clients can choose how to structure data.
					</p>
					<p>
						<b>No data mutation APIs</b><br>
						are provided.
					</p>
					<p>
						<b>Data is never overwritten</b><br>
						so multiple versions of the same key co-exist and are verifiable.
					</p>
				`,
				imageUrl: '/icons/immutable.svg',
			},
			{
				title: 'Auditable',
				subtitle: `
					<p>
						<b>Tamper-evident history system.</b>
					<p>
					<p>
						Clients and auditors want<br>
						<b>cryptographic proof</b> of<br>
						data inclusion and historical<br>
						consistency in real time.
					<p>
					<p>
						If tampered, clients and<br>
						auditors will <b>notice</b> that and<br>
						take actions. 
				`,
				imageUrl: '/icons/auditable.svg',
			},
			{
				title: 'Secure',
				subtitle: `
					<p>
						Data ownership is verifiable<br>
						by clients and auditors.<br>
						Support for Intel SGX enclaves.
					</p>
					<p>
						Sign your data using<br>
						<b>Public-Key Cryptography.</b><br>
						Support for Intel SGX enclaves.
					</p>
					<p>
						Keys additions and revocations<br>
						are immutably stored in the database.
					</p>
				`,
				imageUrl: '/icons/security.svg',
			},
		],
	},
};
