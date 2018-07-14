/**
 * basic console
 */

class Consolas {
  // props
  constructor(options) {
    this.name = 'Consolas';
    this.enabled = (typeof options.enabled !== 'undefined') ? options.enabled : false;
  }
  log = (args) => {
    if (this.enabled) {
      console.log(this.isObject(args) ? args : `"${args}"`);
    }
  }
  warn = (args) => {
    if (this.enabled) {
      console.warn(this.isObject(args) ? args : `"${args}"`);
    }
  }
  error = (args) => {
    if (this.enabled) {
      console.error(this.isObject(args) ? args : `"${args}"`);
    }
  }
  isObject = (args) => {
    if (typeof args === 'object') {
      return true;
    }
    return false;
  }
}

export default {
  install: (Vue) => {
    Object.defineProperty(
      Vue.prototype,
      '$consolas', {
        value: new Consolas({
          enabled: true,
        }),
      },
    );
  },
};

