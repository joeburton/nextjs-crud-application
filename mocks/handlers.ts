import { graphql } from 'msw';

export const handlers = [
  graphql.mutation(`AddDeveloper`, (_req, res, ctx) => {
    return res(
      ctx.data({
        addDeveloper: [
          {
            id: 'fd66e955-10e9-4762-8847-14fbdc80e38a',
            name: 'James Brown Mock',
            skills: 'Jazz Hands Mock',
          },
        ],
      })
    );
  }),
  graphql.query(`GetDevelopers`, (_req, res, ctx) => {
    return res(
      ctx.data({
        developers: [
          {
            id: 'fd66e955-10e9-4762-8847-14fbdc80e38a',
            name: 'Joe Burton',
            skills: 'React, CSS, HTML',
          },
          {
            id: 'fd66e955-10e9-4762-8847-14fbdc80e38b',
            name: 'Jill Hill',
            skills: 'C#, SQL',
          },
        ],
      })
    );
  }),
  graphql.mutation(`DeleteDeveloper`, (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteDeveloper: [
          {
            id: 'fd66e955-10e9-4762-8847-14fbdc80e38b',
            name: 'Jill Hill',
            skills: 'C#, SQL',
          },
        ],
      })
    );
  }),
];
