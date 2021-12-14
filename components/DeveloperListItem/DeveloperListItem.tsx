import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { EditDeveloper } from '../EditDeveloper';

import styles from './DeveloperListItem.module.css';

const DELETE_DEVELOPER = gql`
  mutation ($id: String) {
    deleteDeveloper(id: $id) {
      id
      name
      skills
    }
  }
`;

const GET_DEVELOPERS = gql`
  query GetDevelopers {
    developers {
      id
      name
      skills
    }
  }
`;

const DeveloperListItem = ({ id, name, skills }) => {
  const [updateActive, setUpdateActive] = useState(false);

  const updateCache = (cache) => {
    let { developers } = cache.readQuery({ query: GET_DEVELOPERS });
    const newDevelopers = developers.filter((developer) => developer.id !== id);

    cache.writeQuery({
      query: GET_DEVELOPERS,
      data: {
        developers: newDevelopers,
      },
    });
  };

  const [deleteDeveloper] = useMutation(DELETE_DEVELOPER, {
    update: updateCache,
  });

  const deleteDeveloperFromDatabase = () => {
    deleteDeveloper({
      variables: { id, name, skills },
    });
  };

  return (
    <li>
      {updateActive && (
        <EditDeveloper
          id={id}
          name={name}
          skills={skills}
          onSuccess={() => setUpdateActive(false)}
        />
      )}
      {!updateActive && (
        <div className={styles.listItem}>
          <div className={styles.details}>
            Developer name: {name}, Developer Skills: {skills}
          </div>
          <div className={styles.controls}>
            <button onClick={deleteDeveloperFromDatabase}>Delete</button>
            <button onClick={() => setUpdateActive(true)}>Edit</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default DeveloperListItem;
