import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EditDeveloper } from '../EditDeveloper';
import { GET_DEVELOPERS } from '../../lib/apollo/queries';
import { DELETE_DEVELOPER } from '../../lib/apollo/mutations';

import styles from './DeveloperListItem.module.css';

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
    <li className={styles.listItem} data-testid='developer-list-item'>
      {updateActive && (
        <EditDeveloper
          id={id}
          name={name}
          skills={skills}
          onSuccess={() => setUpdateActive(false)}
        />
      )}
      {!updateActive && (
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            Developer name: {name}, Skills: {skills}
          </div>
          <div className={styles.controls}>
            <button
              className={styles.btnPrimary}
              onClick={() => setUpdateActive(true)}
            >
              Edit
            </button>
            <button
              className={styles.btnDanger}
              onClick={deleteDeveloperFromDatabase}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default DeveloperListItem;
