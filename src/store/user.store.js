// import LeadStrict from "../strict/lead.strict";
import UserStrict from "../strict/user.strict";

const defaultState = {
  user: {},
};

const UserStore = {
  namespaced: true,

  state: () => defaultState,

  getters: {
    user: (state) => state.user,
  },

  actions: {
    reset: ({ commit }) => commit("reset"),
    setUser: ({ commit }, payload) => {

      const IS_INSTANCE = payload instanceof UserStrict;
      const INSTANCE = IS_INSTANCE ? payload : new UserStrict(payload)
      commit("setUser", INSTANCE)
    }
  },

  mutations: {
    reset: (state) => {
      Object.keys(defaultState).map((key) => {
        state[key] = defaultState[key];
      });
    },
    setUser: (state, payload) => (state.user = payload),
  },
};

export default UserStore;
