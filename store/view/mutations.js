import { SET_MOBILE, SET_SIDEBAR, SET_POLLING_ID } from './constants';

export default {
    [SET_MOBILE](state, payload) {
        state.mobile = payload;
    },
    [SET_SIDEBAR](state, payload) {
        if (payload) {
            const { mini, collapsed } = payload;

            state.sidebar.mini = mini;
            state.sidebar.collapsed = collapsed;
        }
    },
    [SET_POLLING_ID](state, payload) {
        state.pollingID = payload;
    }
};
