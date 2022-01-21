import { ReactChildrenList } from '../components/ReactChildrenList';
import { TypedList } from '../components/TypedList';

export default function About() {
  return (
    <div>
      <h2>TypeScript Adventures</h2>
      <>
        <TypedList
          items={[
            { id: '123123', type: 'low' },
            { id: 'b112ar', type: 'high', age: 42 },
          ]}
          renderer={(item) => (
            <div>
              {item.type}, {item?.age}
            </div>
          )}
        />
        <ReactChildrenList>
          <>item 1</>
          <>item 2</>
          <>item 3</>
        </ReactChildrenList>
      </>
    </div>
  );
}
