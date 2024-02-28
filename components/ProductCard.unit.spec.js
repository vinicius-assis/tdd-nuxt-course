import { mount } from '@vue/test-utils';
import ProductCard from './ProductCard';
import { makeServer } from '@/miragejs/server';

const mountProductCard = (server) => {
  const product = server.create('product', {
    title: 'Relógio bonito',
    price: '22.00',
    image:
      'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  });

  const wrapper = mount(ProductCard, {
    propsData: {
      product,
    },
  });

  return { wrapper, product };
};

describe('ProductCard - unit', () => {
  let server;
  beforeEach(() => {
    server = makeServer({ enviroment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should match snapshot', () => {
    const { wrapper } = mountProductCard(server);

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should mount the component', () => {
    const { wrapper } = mountProductCard(server);

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Relógio bonito');
    expect(wrapper.text()).toContain('22.00');
  });

  it('should emit the event addToCart with product object when button gets clicked', async () => {
    const { wrapper, product } = mountProductCard(server);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted().addToCart).toBeTruthy();
    expect(wrapper.emitted().addToCart.length).toBe(1);
    expect(wrapper.emitted().addToCart[0]).toEqual([{ product }]);
  });
});
