<template>
	<i-modal
		class="subscribe-modal"
		size="lg"
		:value="value"
		@input="onVisibilityChange"
	>
		<template slot="header">
			<span class="cn-text-white _font-weight-bold">Download Research Paper</span>
		</template>

		<i-alert
			v-if="sent"
			variant="success"
			class="_margin-bottom-1"
		>
			<template slot="icon">
				<fa icon="check-circle" />
			</template>
			<p>Email sent successfully!</p>
		</i-alert>

		<i-alert
			v-if="error"
			variant="danger"
			class="_margin-bottom-1"
		>
			<template slot="icon">
				<fa icon="times-circle" />
			</template>
			<p>Something went wrong. Please try again later!</p>
		</i-alert>

		<p class="_margin-top-0">
			We will send you the research paper via email.
		</p>

		<i-form v-model="form" @submit.prevent="onSubmit">
			<i-input
				class="_margin-bottom-1"
				:schema="form.contactEmail"
				placeholder="Enter your email"
			/>
			<vue-recaptcha
				ref="recaptcha"
				class="_margin-bottom-1"
				load-recaptcha-script
				:sitekey="sitekey"
				@verify="onVerify"
			/>
			<cn-button
				class="_margin-bottom-1"
				type="submit"
				:disabled="!verified || sending"
			>
				{{ sending ? 'Sending..' : 'Send the document' }}
			</cn-button>
		</i-form>
	</i-modal>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import { API_URL } from '~/services/api';

export default {
	components: {
		VueRecaptcha,
	},
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			verified: false,
			sending: false,
			error: false,
			sent: false,
			sitekey: '6LeB9PUZAAAAAGJtwPEegkY2OeH1rVzHDwmdTguT',
			form: this.$inkline.form({
				contactEmail: {
					validators: [
						{ rule: 'required' },
						{ rule: 'email' },
					],
				},
			}),
		};
	},
	methods: {
		onVisibilityChange(value) {
			this.$emit('input', value);
		},
		async onSubmit() {
			if (!this.verified) {
				return;
			}

			this.sending = true;

			const email = this.form.contactEmail.value;
			const data = {
				email,
			};

			try {
				await axios.post(`${ API_URL }/research-paper`, data, {
					withCredentials: true,
				});

				this.sent = true;
			}
			catch (error) {
				this.error = true;
			}
			finally {
				this.sending = false;
				this.verified = false;

				setTimeout(() => {
					this.sent = false;
					this.error = false;
					this.$emit('input', false);
				}, 3000);
			}
		},
		onVerify(response) {
			if (response) {
				this.verified = true;
			}
		},
	},
};
</script>

<style lang="scss">
.subscribe-modal {
	.header {
		border: none !important;
		border-top-left-radius: 30px !important;
		border-top-right-radius: 30px !important;
		background: $cn-dark-gradient !important;
	}

	.body {
		border-bottom-left-radius: 30px !important;
		border-bottom-right-radius: 30px !important;
	}

	.close {
		display: none !important;

		&::before {
			content: '';
			background: url('/icons/close.svg');
		}
	}

	p {
		text-align: center;
	}

	.form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	input[name="contactEmail"] {
		border-radius: 8px;
	}
}
</style>
