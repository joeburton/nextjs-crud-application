import { useState } from 'react';
import { useMutation } from '@apollo/client';
import styles from './EditDevelper.module.css';
import { UPDATE_DEVELOPER } from '../../lib/apollo/mutations';
import { GET_DEVELOPERS } from '../../lib/apollo/queries';

const EditDeveloper = ({ id, name, skills, onSuccess }) => {
  const [updateDeveloper] = useMutation(UPDATE_DEVELOPER);

  const [newName, setNewName] = useState<string>(name);
  const [newSkills, setNewSkills] = useState<string>(skills);

  const editDeveloper = () => {
    const updatedDeveloperDetails = {
      id,
      name: newName,
      skills: newSkills,
    };
    updateDeveloper({
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
      <button className={styles.btnAction} onClick={editDeveloper}>
        Update
      </button>
    </div>
  );
};

export default EditDeveloper;
