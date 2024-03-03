import { mount } from '@vue/test-utils';
import CartItem from '@/components/CartItem';

describe('CartItem - unit', () => {
  it('should mount the component', () => {
    const wrapper = mount(CartItem);

    expect(wrapper.vm).toBeDefined();
  });
});
