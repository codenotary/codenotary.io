import {
	SET_MOBILE,
	SET_SIDEBAR,
	SET_NAVBAR,
	SET_POLLING_ID,
} from './constants';

export default {
	[SET_MOBILE](state, payload) {
		state.mobile = payload;
	},
	[SET_SIDEBAR](state, payload) {
		if (payload) {
			const { mini, collapsed } = payload;

			mini !== undefined && (state.sidebar.mini = mini);
			collapsed !== undefined && (state.sidebar.collapsed = collapsed);
		}
	},
	[SET_NAVBAR](state, payload) {
		if (payload) {
			const { light, background } = payload;

			light !== undefined && (state.navbar.light = light);
			background !== undefined && (state.navbar.background = background);
		}
	},
	[SET_POLLING_ID](state, payload) {
		state.pollingID = payload;
	},
};
