import { useQuery } from '@apollo/client';
import { DeveloperListItem } from '..';
import { GET_DEVELOPERS } from '../../lib/apollo/queries';

import styles from './DeveloperList.module.css';

const DeveloperList = () => {
  const { loading, error, data } = useQuery(GET_DEVELOPERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className={styles.developerList} data-testid='developer-list'>
      {data.developers.map((developer, i) => {
        return <DeveloperListItem key={i} {...developer} />;
      })}
    </ul>
  );
};

export default DeveloperList;
