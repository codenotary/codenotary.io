<template>
	<PageSection
		id="newsletter-section"
		variant="light-grey"
	>
		<i-container class="container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<h4 class="_font-weight-bold">
				Subscribe to Our Newsletter
			</h4>
			<p class="cn-text-muted_blue">
				Get the latest product updates, company news, and special offers delivered right to your inbox.
			</p>
			<i-form v-model="form" @submit.prevent="onSubmit" inline class="_margin-bottom-1">
				<i-form-group>
					<i-input class="newsletter-input" :schema="form.contactEmail" placeholder="Enter your email"/>
					<cn-button
						type="submit"
						variant="dark"
						class="action-button _font-weight-bold _text-uppercase"
						:disabled="!verified || sending"
						size="sm"
						block
					>
						{{ sending ? 'Sending..' : 'Subscribe' }}
					</cn-button>
				<!--					<i-button-->
				<!--						type="submit"-->
				<!--						variant="dark"-->
				<!--						:disabled="!verified || sending"-->
				<!--						block-->
				<!--					>-->
				<!--						Subscribe-->
				<!--					</i-button>-->
				</i-form-group>
			</i-form>
			<vue-recaptcha
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

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 500px;
}

.container {
	max-width: 500px;
}

.newsletter-input {
	color: red;
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
		//flex-basis: 80%;

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
	//padding: 0;
	//flex-basis: 20%;
}
</style>
