import Vue from 'vue';
import store from '@/stores';
import Home from '@/components/views/home';

jest.mock('@/stores');

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home h1').textContent).toEqual('Welcome Home!');
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home p').textContent).toEqual('using store Global Store version 10.0.0');
  });
});
