import { mount } from '@vue/test-utils';
import ProductList from '.';

describe('ProductList - integration', () => {
  it('should mount the component', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.vm).toBeDefined();
  });
});
