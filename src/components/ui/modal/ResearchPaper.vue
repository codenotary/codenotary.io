<template>
	<v-dialog
		content-class="primary-outlined"
		:value="value"
		max-width="600px"
		persistent
		:overlay-opacity="0.55"
		@input="$emit('input', value)"
	>
		<v-card class="ma-0 pa-0 bg">
			<v-card-title class="ma-0 mb-2 py-2 px-4 primary d-flex justify-start align-center">
				<span class="cn-text-white _font-weight-bold">
					Download Research Paper
				</span>
			</v-card-title>
			<v-card-text
				class="ma-0 mb-2 pa-4 pt-2"
				style="overflow-x: hidden !important;"
			/>
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

			<ValidationObserver
				ref="observer"
				v-slot="{ validate }"
			>
				<v-form
					id="UpdatePasswordForm"
					v-model="form"
					@submit.prevent="validate().then(onSubmit)"
				>
					<ValidationProvider
						v-slot="{ errors }"
						name="contactEmail"
						:rules="`required`"
						mode="aggressive"
						:debounce="300"
					>
						<v-text-field
							v-model="form.contactEmail"
							:error-messages="errors"
							label="Enter your email"
							placeholder="Enter your email"
							required
							autofocus
							:type="show.oldPassword ? 'text' : 'password'"
							:append-icon="show.oldPassword ? mdiEye : mdiEyeOff"
							@click:append="show.oldPassword = !show.oldPassword"
						/>
					</ValidationProvider>
					<vue-recaptcha
						ref="recaptcha"
						class="_margin-bottom-1"
						load-recaptcha-script
						:sitekey="sitekey"
						@verify="onVerify"
					/>
					<UiButtonCn
						class="_margin-bottom-1"
						type="submit"
						:disabled="!verified || sending"
					>
						{{ sending ? 'Sending..' : 'Send the document' }}
					</UiButtonCn>
				</v-form>
			</ValidationObserver>
		</v-card>
	</v-dialog>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import {
	required,
} from 'vee-validate/dist/rules';
import {
	extend,
	ValidationObserver,
	ValidationProvider,
	setInteractionMode,
} from 'vee-validate';
import { API_URL } from '~/services/api';

extend('required', {
	...required,
	message: 'This field is required',
});

setInteractionMode('eager');

export default {
	name: 'UiModalResearchPaper',
	components: {
		VueRecaptcha,
		ValidationObserver,
		ValidationProvider,
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
			form: {
				contactEmail: '',
			},
		};
	},
	methods: {
		async onSubmit() {
			if (!this.verified) {
				return;
			}

			this.sending = true;

			const email = this.form.contactEmail;
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
