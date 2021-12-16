import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useMutation, gql } from '@apollo/client';

import styles from './AddDeveloper.module.css';

const ADD_DEVELOPER = gql`
  mutation AddDeveloper($id: String, $name: String, $skills: String) {
    addDeveloper(id: $id, name: $name, skills: $skills) {
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

const AddDeveloper = () => {
  const [name, setName] = useState<string>('');
  const [skills, setSkills] = useState<string>('');

  const [addTodo] = useMutation(ADD_DEVELOPER);

  const addDeveloper = () => {
    const unique_id = uuid();
    const developer = { id: unique_id, name: name, skills: skills };

    addTodo({
      variables: developer,
      update: (cache, mutationResult) => {
        let { developers } = cache.readQuery({ query: GET_DEVELOPERS });
        cache.writeQuery({
          query: GET_DEVELOPERS,
          data: {
            developers: [...developers, developer],
          },
        });
      },
    });
  };

  return (
    <div className={styles.addDeveloper}>
      <div className={styles.formItem}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          data-testid='name'
        />
      </div>
      <div className={styles.formItem}>
        <input
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder='Skills'
          data-testid='skills'
        />
      </div>
      <button
        className={styles.btnAction}
        onClick={addDeveloper}
        data-testid='add-developer'
      >
        Add
      </button>
    </div>
  );
};

export default AddDeveloper;
