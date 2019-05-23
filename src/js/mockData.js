
class MockData {

  getTournamentDates(division, type) {
    var dates = [];
    division.dates.forEach((date) =>
    {
      if (date.description == type) {
        dates.push(date);
      }
    });

    // console.log(dates);
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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

  getPromotions(){
    return [
      {
        id: 1,
        name: 'Unified Sport Beach Volleyball Clinic with Jeremy Casebeer',
        description: {
          text: 'Tomorrow Warriors has organized the first beach volleyball Unified Sport clinic at Uprising Volleyball.',
          image: 'Finished_Flyer_page-0001_large.jpg'
        },
        detail: '# Unified Sport Beach Volleyball Clinic with Jeremy Casebeer  \n Tomorrow Warriors has organized the first beach volleyball Unified Sport clinic at Uprising Volleyball.   Athletes with and without disabilities will have the opportunity to work with AVP and Team USA pro beach volleyball player Jeremy Casebeer to learn the basic skills of beach volleyball. Special thanks to [Five12 Apparel](https://five12apparel.com/), [AVPFirst](http://avpfirst.com/), North Sound Physical Therapy and [Ink It Your Way](http://www.inkityourway.com/) for making this clinics possible.  \n\nPlease say thanks to them for making this work. What is Unified Sport? Dedicated to promoting social inclusion through shared sports training and competition experiences, Unified Sports joins people with and without intellectual disabilities on the same team. It was inspired by a simple principle: training together and playing together is a quick path to friendship and understanding. In Unified Sports, teams are made up of people of similar age and ability, which makes practices more fun and games more challenging and exciting for all. Having sport in common is just one more way that preconceptions and false ideas are swept away. Our opponent is intolerance. Only shoulder-to-shoulder, as teammates together, can we defeat it.  [Learn More About Unified Sport Here](http://www.playunified.org/about).  \n\nOne of the top up and coming blockers on the AVP Tour and internationally with USA Volleyball,  Jeremy Casebeer is an active and outspoken advocate for the environment and human rights.   He uses his talent on the volleyball court to create a platform for social change.   [Learn more about Jeremy Here](http://jeremycasebeer.com/?page_id=88). Questions?  Email UprisingVolleyball@gmail.com or call Mati at 425-344-0408.',
        dates: [
          {
            description: 'promotionEnds',
            begin: '2019-05-25T00:00:00.0000000Z',
            end: '2019-05-25T11:59:59.0000000Z'
          }
        ]
      },
      {
        id: 2,
        name: 'Win a Chance to Play with the pro!',
        description: {
          text: 'Tomorrow Warriors has organized the first beach volleyball Unified Sport clinic at Uprising Volleyball.',
          image: ''
        },
        detail: '# Unified Sport Beach Volleyball Clinic with Jeremy Casebeer  \n Tomorrow Warriors has organized the first beach volleyball Unified Sport clinic at Uprising Volleyball.   Athletes with and without disabilities will have the opportunity to work with AVP and Team USA pro beach volleyball player Jeremy Casebeer to learn the basic skills of beach volleyball. Special thanks to [Five12 Apparel](https://five12apparel.com/), [AVPFirst](http://avpfirst.com/), North Sound Physical Therapy and [Ink It Your Way](http://www.inkityourway.com/) for making this clinics possible.   Please say thanks to them for making this work. What is Unified Sport? Dedicated to promoting social inclusion through shared sports training and competition experiences, Unified Sports joins people with and without intellectual disabilities on the same team. It was inspired by a simple principle: training together and playing together is a quick path to friendship and understanding. In Unified Sports, teams are made up of people of similar age and ability, which makes practices more fun and games more challenging and exciting for all. Having sport in common is just one more way that preconceptions and false ideas are swept away. Our opponent is intolerance. Only shoulder-to-shoulder, as teammates together, can we defeat it.  [Learn More About Unified Sport Here](http://www.playunified.org/about). One of the top up and coming blockers on the AVP Tour and internationally with USA Volleyball,  Jeremy Casebeer is an active and outspoken advocate for the environment and human rights.   He uses his talent on the volleyball court to create a platform for social change.   [Learn more about Jeremy Here](http://jeremycasebeer.com/?page_id=88). Questions?  Email UprisingVolleyball@gmail.com or call Mati at 425-344-0408.',
        dates: [
          {
            description: 'promotionEnds',
            begin: '2019-05-25T00:00:00.0000000Z',
            end: '2019-05-25T11:59:59.0000000Z'
          }
        ]
      }
    ]
  }
}

export default MockData;
