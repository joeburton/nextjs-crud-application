import { GET_NOTES, GET_NOTE } from '../../lib/apollo/queries';
import apolloClientNotes from '../../lib/apollo/apolloClientNotes';

const Notes = ({ note }) => {
  console.log(note);
  {
  }
  return (
    <>
      <pre>{JSON.stringify(note, null, 3)}</pre>
    </>
  );
};

export default Notes;

export async function getStaticPaths() {
  const { data } = await apolloClientNotes.query({
    query: GET_NOTES,
  });

  console.log(data);

  const paths = data?.notes.map((note) => ({
    params: { id: note.id },
  }));

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log(context);

  const { data } = await apolloClientNotes.query({
    query: GET_NOTE,
    variables: { id: context.params.id },
  });

  console.log(data);

  return {
    props: { note: data },
  };
}
