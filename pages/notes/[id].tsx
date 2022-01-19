import { GET_NOTES, GET_NOTE } from '../../lib/apollo/queries';
import apolloClientNotes from '../../lib/apollo/apolloClientNotes';

const Notes = ({ note }) => {
  return (
    <>
      <pre>{JSON.stringify(note, null, 3)}</pre>
    </>
  );
};

export default Notes;
interface Note {
  note: {
    id: string;
    title: string;
    note: string;
  };
}
interface NoteVariables {
  id: string;
}
interface NoteId {
  id: string;
}
interface NotesIdData {
  notes: NoteId[];
}

export async function getStaticPaths() {
  const { data } = await apolloClientNotes.query<NotesIdData>({
    query: GET_NOTES,
  });

  const paths = data?.notes.map((note) => ({
    params: { id: note.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log(context);

  const { data } = await apolloClientNotes.query<Note, NoteVariables>({
    query: GET_NOTE,
    variables: { id: context.params.id },
  });

  return {
    props: { note: data },
  };
}
