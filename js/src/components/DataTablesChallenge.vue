<template>
  <v-row>
    <v-col>
      <h2>Data Tables Challenge</h2>

      <p>See js/README.md for challenge instructions.</p>

      <v-data-table
        data-test-id="the-data-table"
        :headers="headers"
        :items="allLoanApplications"
        :sort-by.sync="sortBy"
        sort-desc
      >
        <template v-slot:[`item.lastNoteByCurrentUser`]="{ item }">
          {{timeAgo(item.lastNoteByCurrentUser)}}
        </template>
        <template v-slot:[`item.timeInStatus`]="{ item }">
          {{timeAgo(item.timeInStatus)}}
        </template>
        <template v-slot:[`item.updatedAt`]="{ item }">
          {{timeAgo(item.updatedAt)}}
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { DateTime } from 'luxon';

export default {
  data: () => ({
    // declare initial data here
    headers: [
      { text: 'App Id', value: 'id' },
      { text: 'Last', value: 'lastName' },
      { text: 'First', value: 'firstName' },
      { text: 'State', value: 'residenceState' },
      { text: 'Status', value: 'status' },
      { text: 'My Last Note', value: 'lastNoteByCurrentUser' },
      { text: 'Time In Status', value: 'timeInStatus' },
      { text: 'Task', value: 'oldestOpenTask' },
      { text: 'Last Updated', value: 'updatedAt' }
    ],
    sortBy: 'lastNoteByCurrentUser'
  }),

  computed: {
    ...mapGetters({
      allLoanApplications: 'allLoanApplications'
    })
  },

  methods: {
    ...mapActions({
      loadLoanApplications: 'loadLoanApplications'
    }),
    timeAgo (date) {
      return DateTime.fromISO(date).toRelative();
    }
  }
};
</script>
