
const state = {
  name: 'Global Store',
  version: '1.0.0',
  author: 'Olivier',
};

const getters = {
  getName: jest.fn(() => 'Global Store'),
  getVersion: jest.fn(() => '10.0.0'),
};

const mutations = {
  setName: jest.fn(),
};

const actions = {
  modifyName: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
