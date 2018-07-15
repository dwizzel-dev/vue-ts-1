
const state = {
  name: 'Global Store',
  version: '1.0.0',
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
  state,
  getters,
  mutations,
  actions,
};
