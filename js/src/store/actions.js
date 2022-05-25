import axios from 'axios';

export default {
  loadLoanApplications: async ({ commit }) => {
    // TODO: make a GET request
    const baseURL = 'https://6271819ac455a64564b41998.mockapi.io';
    try {
      const data = await axios.get(`${baseURL}/api/v3/applications`);
      if (data.data.status === 'success') {
        commit('SET_APPLICATIONS', data.data.data.applications);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
