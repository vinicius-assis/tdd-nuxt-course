import { mount } from '@vue/test-utils';
import ProductList from '.';
import Search from '@/components/Search';

describe('ProductList - integration', () => {
  it('should mount the component', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.vm).toBeDefined();
  });

  it('should mount the Search component as a child', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.findComponent(Search)).toBeDefined();
  });
});
