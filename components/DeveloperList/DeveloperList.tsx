import { useQuery, gql } from '@apollo/client';

import { DeveloperListItem } from '..';

import styles from './DeveloperList.module.css';

const GET_DEVELOPERS = gql`
  query {
    developers {
      id
      name
      skills
    }
  }
`;

const DeveloperList = () => {
  const { loading, error, data } = useQuery(GET_DEVELOPERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className={styles.developerList}>
      {data.developers.map((developer, i) => {
        return <DeveloperListItem key={i} {...developer} />;
      })}
    </ul>
  );
};

export default DeveloperList;
