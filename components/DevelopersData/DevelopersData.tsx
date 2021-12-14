import { useQuery, useMutation, gql } from '@apollo/client';

const GET_DEVELOPERS = gql`
  query GetDevelopers {
    developers {
      id
      name
      skills
    }
  }
`;

const ADD_DEVELOPER = gql`
  mutation addDeveloper($id: String, $name: String, $skills: String) {
    addDeveloper(id: $id, name: $name, skills: $skills) {
      id
      name
      skills
    }
  }
`;

const DELETE_DEVELOPER = gql`
  mutation ($id: String) {
    deleteDeveloper(id: $id) {
      id
      name
      skills
    }
  }
`;

const newDeveloper = {
  id: 'something-random',
  name: 'Mike Brains',
  skills: 'PHP, CSS',
};

const DevelopersData = () => {
  const { loading, error, data } = useQuery(GET_DEVELOPERS);

  const [addTodo] = useMutation(ADD_DEVELOPER);

  const updateCache = (cache) => {
    let { developers } = cache.readQuery({ query: GET_DEVELOPERS });
    const newDevelopers = developers.filter(
      (developer) => developer.id !== 'something-random'
    );

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
      variables: {
        id: 'something-random',
        name: 'Joe Burton',
        skills: 'React, HTML, CSS',
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <button
        onClick={() =>
          addTodo({
            variables: newDeveloper,
            update: (cache, mutationResult) => {
              let { developers } = cache.readQuery({ query: GET_DEVELOPERS });
              console.log(mutationResult);
              cache.writeQuery({
                query: GET_DEVELOPERS,
                data: {
                  developers: [...developers, newDeveloper],
                },
              });
            },
          })
        }
      >
        Add Developer
      </button>
      <button onClick={deleteDeveloperFromDatabase}>Delete Developer 3</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DevelopersData;
