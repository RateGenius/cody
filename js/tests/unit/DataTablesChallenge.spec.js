import axios from 'axios';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { cloneDeep } from 'lodash';
import { DateTime } from 'luxon';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { actions, getters, mutations, state } from '@/store/index.js';
import DataTablesChallenge from '@/components/DataTablesChallenge.vue';
import mockAxiosResponse from './mockAxiosResponse.js';

Vue.use(Vuetify);

jest.mock('axios');

describe('Feature: DataTablesChallenge component', () => {
  let vuetify;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      actions,
      getters,
      mutations,
      state: cloneDeep(state)
    });
  });

  describe('Scenario: User views the component', () => {
    describe('When the component is rendered', () => {
      it('Then the component contains the text "Data Tables Challenge"', () => {
        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        expect(wrapper.text()).toMatch('Data Tables Challenge');
      });

      it('And the component contains a <v-data-table>', () => {
        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        const theDataTable = wrapper.find('[data-test-id=the-data-table]');

        expect(theDataTable.exists()).toBe(true);
      });

      it('And the "My Last Note" column is sorted in descending order', async () => {
        axios.get.mockResolvedValue({ status: 200, data: mockAxiosResponse });

        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        await store.dispatch('loadLoanApplications');

        const firstColumnOfFirstRow = await wrapper
          .get('[data-test-id=the-data-table] tr:nth-child(1) > td:nth-child(1)');

        expect(firstColumnOfFirstRow.text()).toMatch('50');
      });

      it('And the text of the first row\'s "My Last Note" column is formatted using a relative format', async () => {
        axios.get.mockResolvedValue({ status: 200, data: mockAxiosResponse });

        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        await store.dispatch('loadLoanApplications');

        const firstColumnOfFirstRow = await wrapper
          .get('[data-test-id=the-data-table] tr:nth-child(1) > td:nth-child(1)');
        const firstColumnOfFirstRowText = firstColumnOfFirstRow.text();
        expect(firstColumnOfFirstRowText.length).toBeGreaterThan(0);

        const sixthColumnOfFirstRow = await wrapper
          .get('[data-test-id=the-data-table] tr:nth-child(1) > td:nth-child(6)');
        const sixthColumnOfFirstRowText = sixthColumnOfFirstRow.text();
        expect(sixthColumnOfFirstRowText.length).toBeGreaterThan(0);

        const mockLoanApplication = mockAxiosResponse.data.applications
          .find((application) => application.id === firstColumnOfFirstRowText);
        const expected = DateTime
          .fromISO(mockLoanApplication.lastNoteByCurrentUser)
          .toRelative();

        expect(sixthColumnOfFirstRowText).toMatch(expected);
      });
    });

    describe('When the "loadLoanApplications" action is dispatched', () => {
      it('Then the "allLoanApplications" getter returns an array whose length > 0', async () => {
        axios.get.mockResolvedValue({ status: 200, data: mockAxiosResponse });

        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        expect(wrapper.vm.allLoanApplications).toHaveLength(0);

        await store.dispatch('loadLoanApplications');

        expect(wrapper.vm.allLoanApplications.length).toBeGreaterThan(0);
      });
    });

    describe('When the user clicks a new column header', () => {
      it('Then the <v-data-table> is sorted in ascending order by the values in that column', async () => {
        axios.get.mockResolvedValue({ status: 200, data: mockAxiosResponse });

        const wrapper = mount(DataTablesChallenge, { store, vuetify });

        await store.dispatch('loadLoanApplications');

        const lastNameColumnHeader = await wrapper
          .get('[data-test-id=the-data-table] thead > tr > th:nth-child(2)');

        await lastNameColumnHeader.trigger('click');

        const secondColumnOfFirstRow = await wrapper
          .get('[data-test-id=the-data-table] tr:nth-child(1) > td:nth-child(2)');

        expect(secondColumnOfFirstRow.text()).toMatch('Farrell');
      });
    });
  });
});
