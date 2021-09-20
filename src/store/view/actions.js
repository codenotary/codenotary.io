import {
	SET_MOBILE,
	SET_SIDEBAR,
	SET_NAVBAR,
	SET_POLLING_ID,
} from './constants';

export default {
	[SET_MOBILE]({ commit }, payload) {
		commit(SET_MOBILE, payload);
	},
	[SET_SIDEBAR]({ commit }, payload) {
		commit(SET_SIDEBAR, payload);
	},
	[SET_NAVBAR]({ commit }, payload) {
		commit(SET_NAVBAR, payload);
	},
	[SET_POLLING_ID]({ commit }, payload) {
		commit(SET_POLLING_ID, payload);
	},
};
