import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from './EditDevelper.module.css';

const GET_DEVELOPERS = gql`
  query GetDevelopers {
    developers {
      id
      name
      skills
    }
  }
`;

const UPDATE_DEVELOPER = gql`
  mutation ($id: String, $name: String, $skills: String) {
    editDeveloper(id: $id, name: $name, skills: $skills) {
      id
      name
      skills
    }
  }
`;

const EditDeveloper = ({ id, name, skills, onSuccess }) => {
  const [editDeveloper] = useMutation(UPDATE_DEVELOPER);

  const [newName, setNewName] = useState<string>(name);
  const [newSkills, setNewSkills] = useState<string>(skills);

  const updateDeveloper = () => {
    const updatedDeveloperDetails = {
      id,
      name: newName,
      skills: newSkills,
    };
    editDeveloper({
      variables: updatedDeveloperDetails,
      update: (cache, mutationResult) => {
        let { developers } = cache.readQuery({ query: GET_DEVELOPERS });

        console.log(mutationResult);

        const updatedDevelopers = developers.map((developer) =>
          developer.id === id ? updatedDeveloperDetails : developer
        );

        cache.writeQuery({
          query: GET_DEVELOPERS,
          data: {
            developers: updatedDevelopers,
          },
        });
      },
    }).then(() => onSuccess());
  };

  return (
    <div className={styles.editDeveloper}>
      <div className={styles.formItem}>
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div className={styles.formItem}>
        <input
          value={newSkills}
          onChange={(e) => setNewSkills(e.target.value)}
        />
      </div>
      <button onClick={updateDeveloper}>Update</button>
    </div>
  );
};

export default EditDeveloper;
