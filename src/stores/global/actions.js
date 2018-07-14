/**
 * global actions
 */

export default {
  modifyName: ({ commit }, name) => {
    commit('setName', name);
  },
};
