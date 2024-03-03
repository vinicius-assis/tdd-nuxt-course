import { mount } from '@vue/test-utils';
import CartItem from '@/components/CartItem';
import { makeServer } from '@/miragejs/server';

let server;

const mountCartItem = () => {
  const product = server.create('product', {
    title: 'Lindo Relógio',
    price: '22.33',
  });

  const wrapper = mount(CartItem, {
    propsData: {
      product,
    },
  });

  return { wrapper, product };
};

describe('CartItem - unit', () => {
  beforeEach(() => {
    server = makeServer({ enviroment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should mount the component', () => {
    const { wrapper } = mountCartItem();

    expect(wrapper.vm).toBeDefined();
  });
});
