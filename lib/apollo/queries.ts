import { gql } from '@apollo/client';

const GET_DEVELOPERS = gql`
  query GetDevelopers {
    developers {
      id
      name
      skills
    }
  }
`;

export { GET_DEVELOPERS };
