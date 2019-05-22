
class MockData {

  getTournamentDates(division, type) {
    var dates = [];
    division.dates.forEach((date) =>
    {
      if (date.description == type) {
        dates.push(date);
      }
    });

    return dates;
  }

  getTournaments(ageGroup) {
    return [
      {
        id: 1,
        name: '2019 Adult Uprising Cup at Willis Tucker Park',
        description: 'Description: 2019 Adult Uprising Cup at Willis Tucker Park',
        divisions: [
          {
            id: 1,
            name: 'May 25 Adult Coed BB/A Uprising Cup #2',
            description: `The first tournament for ${ageGroup}`,
            fee: 65.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-05-25T00:00:00.0000000Z',
                end: '2019-05-25T11:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-05-25T00:00:00.0000000Z',
                end: '2019-05-25T09:00:00.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-05-26T00:00:00.0000000Z',
                end: '2019-05-26T09:00:00.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-05-27T00:00:00.0000000Z',
                end: '2019-05-27T09:00:00.0000000Z'
              }
            ]
          },
          {
            id: 2,
            name: 'June 8 Adult Men\'s & Women\'s BB/A Uprising Cup #3',
            description: `The second tournament for ${ageGroup}`,
            fee: 65.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-08T00:00:00.0000000Z',
                end: '2019-06-08T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-08T08:00:00.0000000Z',
                end: '2019-06-08T17:00:00.0000000Z'
              }
            ]
          },
          {
            id: 3,
            name: 'July 27 Adult Coed BB/A Uprising Cup #4',
            description: `The second tournament for ${ageGroup}`,
            fee: 65.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-07-27T00:00:00.0000000Z',
                end: '2019-07-27T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-07-27T08:00:00.0000000Z',
                end: '2019-07-27T17:00:00.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-07-28T08:00:00.0000000Z',
                end: '2019-07-28T17:00:00.0000000Z'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '2019 Junior Uprising Cup at Willis Tucker Park',
        description: 'Description: 2019 Junior Uprising Cup at Willis Tucker Park',
        divisions: [
          {
            id: 3,
            name: 'June 1/2 Uprising Cup #3, The Snohomish Open',
            description: `The first tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T09:00:00.0000000Z'
              }
            ]
          },
          {
            id: 4,
            name: 'June 9 Uprising Cup #4, The Five12 Challenge',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-09T08:00:00.0000000Z',
                end: '2019-06-09T17:00:00.0000000Z'
              }
            ]
          },
          {
            id: 5,
            name: 'July 28 Uprising Cup #5, Team Uprising VolleyFest',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-07-28T00:00:00.0000000Z',
                end: '2019-07-28T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-07-28T08:00:00.0000000Z',
                end: '2019-07-28T17:00:00.0000000Z'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '2019 Junior Uprising Cup at Willis Tucker Park',
        description: 'Description: 2019 Junior Uprising Cup at Willis Tucker Park',
        divisions: [
          {
            id: 3,
            name: 'June 1/2 Uprising Cup #3, The Snohomish Open',
            description: `The first tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T09:00:00.0000000Z'
              }
            ]
          },
          {
            id: 4,
            name: 'June 9 Uprising Cup #4, The Five12 Challenge',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-09T08:00:00.0000000Z',
                end: '2019-06-09T17:00:00.0000000Z'
              }
            ]
          },
          {
            id: 5,
            name: 'July 28 Uprising Cup #5, Team Uprising VolleyFest',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-07-28T00:00:00.0000000Z',
                end: '2019-07-28T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-07-28T08:00:00.0000000Z',
                end: '2019-07-28T17:00:00.0000000Z'
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: '2019 Junior Uprising Cup at Willis Tucker Park',
        description: 'Description: 2019 Junior Uprising Cup at Willis Tucker Park',
        divisions: [
          {
            id: 3,
            name: 'June 1/2 Uprising Cup #3, The Snohomish Open',
            description: `The first tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T09:00:00.0000000Z'
              }
            ]
          },
          {
            id: 4,
            name: 'June 9 Uprising Cup #4, The Five12 Challenge',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-06-01T00:00:00.0000000Z',
                end: '2019-06-01T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-06-09T08:00:00.0000000Z',
                end: '2019-06-09T17:00:00.0000000Z'
              }
            ]
          },
          {
            id: 5,
            name: 'July 28 Uprising Cup #5, Team Uprising VolleyFest',
            description: `The second tournament for ${ageGroup}`,
            fee: 68.00,
            dates: [
              {
                description: 'registrationClose',
                begin: '2019-07-28T00:00:00.0000000Z',
                end: '2019-07-28T23:59:59.0000000Z'
              },
              {
                description: 'play',
                begin: '2019-07-28T08:00:00.0000000Z',
                end: '2019-07-28T17:00:00.0000000Z'
              }
            ]
          }
        ]
      }
    ]
  }
}

export default MockData;
