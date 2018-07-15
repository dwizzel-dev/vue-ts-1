import Vue from 'vue';
import store from '@/stores';
import Home from '@/components/views/home';
import consolas from '@/plugins/consolas';

jest.mock('@/stores');
jest.mock('@/plugins/consolas');

describe('home.vue', () => {
  it('should render correct contents', () => {
    Vue.use(consolas);
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home h1').textContent).toEqual('Welcome Home!');
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home p').textContent).toEqual('Using store Global Store version 10.0.0 by "Olivier"');
  });
});
