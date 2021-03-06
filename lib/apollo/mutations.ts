import { gql } from '@apollo/client';

const ADD_DEVELOPER = gql`
  mutation AddDeveloper($id: String, $name: String, $skills: String) {
    addDeveloper(id: $id, name: $name, skills: $skills) {
      id
      name
      skills
    }
  }
`;

const DELETE_DEVELOPER = gql`
  mutation DeleteDeveloper($id: String) {
    deleteDeveloper(id: $id) {
      id
      name
      skills
    }
  }
`;

const UPDATE_DEVELOPER = gql`
  mutation UpdateDeveloper($id: String, $name: String, $skills: String) {
    updateDeveloper(id: $id, name: $name, skills: $skills) {
      id
      name
      skills
    }
  }
`;

export { ADD_DEVELOPER, DELETE_DEVELOPER, UPDATE_DEVELOPER };
