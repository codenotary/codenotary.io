import { shallowMount } from '@vue/test-utils';
import ContactModal from '../../components/global/modals/ContactModal';
import GlobalModalNewsletter from '../../components/global/modals/GlobalModalNewsletter';
import JoinZtcModal from '../../components/global/modals/JoinZtcModal';
import PartnerModal from '../../components/global/modals/PartnerModal';
import StartTrialModal from '../../components/global/modals/StartTrialModal';
import WebinarModal from '../../components/global/modals/WebinarModal';

const scriptMixin = { name: 'scriptInjectMixin' };

describe('ContactModal.vue', () => {
		const wrapper = shallowMount(ContactModal);
		it('Form ID for Contact Modal is "10"', () => {
		const expectedFormClass = '_form_10';
				/** The idea being, if the form id is correct we can then test for scriptInjectMixin existence
				 *   and trust the ID from the constant
				 */
			expect(wrapper.html()).toMatch(expectedFormClass);
	});

  it('Form has scriptInjectMixin', () => {
    const mixins = wrapper.vm.$options.mixins;
    expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
	});
});

describe('GlobalModalNewsletter.vue', () => {
		const wrapper = shallowMount(GlobalModalNewsletter);
		it('Form ID for GlobalModalNewsletter is "24"', () => {
				const expectedFormClass = '_form_24';
				expect(wrapper.html()).toMatch(expectedFormClass);
		});

		it('Form for GlobalModalNewsletter has scriptInjectMixin', () => {
				const mixins = wrapper.vm.$options.mixins;
				expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
		});
});


describe('JoinZtcModal.vue', () => {
		const wrapper = shallowMount(JoinZtcModal);
		it('Form ID for JoinZtcModal is "2"', () => {
				const expectedFormClass = '_form_2';
				expect(wrapper.html()).toMatch(expectedFormClass);
		});

		it('Form for JoinZtcModal has scriptInjectMixin', () => {
				const mixins = wrapper.vm.$options.mixins;
				expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
		});
});


describe('PartnerModal.vue', () => {
		const wrapper = shallowMount(PartnerModal);
		it('Form ID for PartnerModal is "18"', () => {
				const expectedFormClass = '_form_18';
				expect(wrapper.html()).toMatch(expectedFormClass);
		});

		it('Form for PartnerModal has scriptInjectMixin', () => {
				const mixins = wrapper.vm.$options.mixins;
				expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
		});
});


describe('LedgerComplianceModal.vue', () => {
		const wrapper = shallowMount(StartTrialModal);
		it('Form ID for LedgerComplianceModal is "22"', () => {
				const expectedFormClass = '_form_22';
				expect(wrapper.html()).toMatch(expectedFormClass);
		});

		it('Form for LedgerComplianceModal has scriptInjectMixin', () => {
				const mixins = wrapper.vm.$options.mixins;
				expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
		});
});


describe('WebinarModal.vue', () => {
		const wrapper = shallowMount(WebinarModal);
		it('Form ID for WebinarModal is "16"', () => {
				const expectedFormClass = '_form_16';
				expect(wrapper.html()).toMatch(expectedFormClass);
		});

		it('Form for WebinarModal has scriptInjectMixin', () => {
				const mixins = wrapper.vm.$options.mixins;
				expect(mixins).toEqual(expect.arrayContaining([expect.objectContaining(scriptMixin)]));
		});
});
