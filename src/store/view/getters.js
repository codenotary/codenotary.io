import {
	MOBILE,
	SIDEBAR_MINI,
	SIDEBAR_COLLAPSED,
	NAVBAR_LIGHT,
	NAVBAR_BACKGROUND,
	POLLING_ID,
} from './constants';

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
	[NAVBAR_LIGHT](state) {
		return state.navbar.light;
	},
	[NAVBAR_BACKGROUND](state) {
		return state.navbar.background;
	},
	[POLLING_ID](state) {
		return state.pollingID;
	},
};
