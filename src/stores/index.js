import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';

Vue.use(Vuex);

const mutationObserver = (store) => {
  store.subscribe((mutation) => {
    console.log(mutation);
  });
};

export default new Vuex.Store({
  modules: {
    global,
  },
  plugins: [
    mutationObserver,
  ],
});
