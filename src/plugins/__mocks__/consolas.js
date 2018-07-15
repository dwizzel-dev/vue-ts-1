
const Consolas = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

export default {
  install: (Vue) => {
    Object.defineProperty(
      Vue.prototype,
      '$consolas', {
        value: Consolas,
      },
    );
  },
};
