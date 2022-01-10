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

const GET_NOTES = gql`
  query GetNotes {
    notes {
      id
    }
  }
`;

const GET_NOTE = gql`
  query GetNote($id: String) {
    note(id: $id) {
      id
      title
      note
    }
  }
`;

export { GET_DEVELOPERS, GET_NOTES, GET_NOTE };
