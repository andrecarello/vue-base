import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import UserStore from "./user.store";

Vue.use(Vuex);

const vuexStore = new Vuex.Store({
  strict: false,
  modules: {
    UserStore
  },
  plugins: [
    new VuexPersistence({
      key: "@local::storage",
      storage: window.localStorage
    }).plugin
  ]
});


export default vuexStore;
