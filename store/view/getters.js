import { MOBILE, SIDEBAR_MINI, SIDEBAR_COLLAPSED, POLLING_ID } from './constants';

export default {
	[MOBILE](state) {
		return state.mobile;
	},
	[SIDEBAR_MINI](state) {
		return state.sidebar.mini;
	},
	[SIDEBAR_COLLAPSED](state) {
		return state.sidebar.collapsed;
	},
	[POLLING_ID](state) {
		return state.pollingID;
	},
};
