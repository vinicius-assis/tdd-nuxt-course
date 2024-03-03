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

  it('should display product info', () => {
    const {
      wrapper,
      product: { title, price },
    } = mountCartItem();
    const content = wrapper.text();

    expect(content).toContain(title);
    expect(content).toContain(price);
  });

  it('should display quantity 1 when product is first displayed', () => {
    const { wrapper } = mountCartItem();
    const quantity = wrapper.find('[data-testid="quantity"]');

    expect(quantity.text()).toContain('1');
  });
});
