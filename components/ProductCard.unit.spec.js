import { mount } from '@vue/test-utils';
import ProductCard from './ProductCard';
import { makeServer } from '@/miragejs/server';

describe('ProductCard - unit', () => {
  let server;
  beforeEach(() => {
    server = makeServer({ enviroment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'Relógio bonito',
          price: '22.00',
        }),
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Relógio bonito');
    expect(wrapper.text()).toContain('22.00');
  });
});
