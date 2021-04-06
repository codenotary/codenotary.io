<template>
	<PageSection
		id="newsletter-section"
		variant="light-grey"
	>
		<i-container class="container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<h4 class="_font-weight-bold _margin-top-0">
				{{ content.newsletterSection.title }}
			</h4>
			<p class="cn-text-muted_blue _font-size-sm _text-center">
				{{ content.newsletterSection.subtitle }}
			</p>
			<i-form
				v-model="form" class="_margin-bottom-1"
				inline @submit.prevent="onSubmit"
			>
				<i-form-group>
					<i-input
						class="newsletter-input" :schema="form.contactEmail"
						:placeholder="content.newsletterSection.emailPlaceholder"
					/>
					<cn-button
						type="submit"
						variant="dark"
						class="action-button _font-weight-bold _text-uppercase"
						:disabled="!verified || sending"
						size="sm"
						block
					>
						{{ sending ? 'Sending..' : content.newsletterSection.actionText }}
					</cn-button>
				</i-form-group>
			</i-form>
			<vue-recaptcha
				size="sm"
				ref="recaptcha"
				:load-recaptcha-script="true"
				:sitekey="sitekey"
				@verify="onVerify"
			/>
		</i-container>
	</PageSection>
</template>

<script>
import axios from 'axios';
import { API_URL } from '@/services/api';
import VueRecaptcha from 'vue-recaptcha';
import homepage from '@/content/homepage';

export default {
	name: 'NewsletterSection',
	components: {
		VueRecaptcha,
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
			content: homepage,
		};
	},
	methods: {
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
				await axios.post(`${ API_URL }/subscribe`, data, {
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

<style lang="scss" scoped>
.container {
	max-width: 500px;
}

::v-deep .form {
	display: flex;
	width: 100%;

	.form-group {
		width: 100%;
		display: flex;
		flex-wrap: wrap;

		.form-group-error {
			flex-basis: 100%;
		}
	}

	.form-input-group {
		flex: 1 1 0;

		.form-input {
			border: 3px solid #a1aec0;
			border-radius: 5px;
			margin-right: 30px;

			input {
				padding: 3px;
				border: 0;
			}
		}
	}
}

.action-button {
	flex: 0 1 20%;
}
</style>
