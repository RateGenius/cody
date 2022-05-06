const mockAxiosResponse = {
  data: {
    applications: [
      {
        firstName: 'Edward',
        lastName: 'Quigley',
        residenceState: 'CT',
        status: 'Grass-roots',
        lastNoteByCurrentUser: '2022-05-05T16:54:30.950Z',
        timeInStatus: '2021-07-20T06:26:42.394Z',
        oldestOpenTask: 'morph impactful technologies',
        updatedAt: '2022-05-05T09:20:34.661Z',
        id: '1'
      },
      {
        firstName: 'Jettie',
        lastName: 'Romaguera',
        residenceState: 'NY',
        status: 'De-engineered',
        lastNoteByCurrentUser: '2022-05-05T17:20:29.555Z',
        timeInStatus: '2022-01-10T09:30:04.585Z',
        oldestOpenTask: 'reintermediate ubiquitous schemas',
        updatedAt: '2022-05-05T15:36:00.693Z',
        id: '41'
      },
      {
        firstName: 'Jewel',
        lastName: 'Farrell',
        residenceState: 'NM',
        status: 'User-centric',
        lastNoteByCurrentUser: '2022-05-05T17:40:25.619Z',
        timeInStatus: '2021-07-12T15:28:34.812Z',
        oldestOpenTask: 'facilitate leading-edge synergies',
        updatedAt: '2022-05-05T04:12:09.208Z',
        id: '50'
      }
    ],
    page: 1,
    per_page: 50,
    total_pages: 1,
    total_records: 50
  },
  status: 'success'
};

export {
  mockAxiosResponse as default
};
