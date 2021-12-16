import { DeveloperList, AddDeveloper } from '../components';

const Home = ({ data }) => {
  console.log(data);
  return (
    <>
      <AddDeveloper />
      <hr />
      <DeveloperList />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      data: { name: 'Joe Burton', dob: '04/10/79', gender: 'male' },
    },
  };
}

export default Home;
