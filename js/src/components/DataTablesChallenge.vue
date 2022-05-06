<template>
  <v-row>
    <v-col>
      <h2>Data Tables Challenge</h2>

      <p>See js/README.md for challenge instructions.</p>

      <v-data-table
        data-test-id="the-data-table"
      >
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    // declare initial data here
  }),

  computed: {
    ...mapGetters({
      allLoanApplications: 'allLoanApplications'
    })
  },

  methods: {
    ...mapActions({
      loadLoanApplications: 'loadLoanApplications'
    })
  }
};
</script>
