import { shallowMount } from '@vue/test-utils';
import DataTablesChallenge from '@/components/DataTablesChallenge.vue';

describe('Feature: DataTablesChallenge component', () => {
  describe('Scenario: User views the component', () => {
    describe('When the component is rendered', () => {
      it('Then the component contains the text "Data Tables Challenge"', () => {
        const wrapper = shallowMount(DataTablesChallenge);

        expect(wrapper.text()).toMatch('Data Tables Challenge');
      });
    });
  });
});
