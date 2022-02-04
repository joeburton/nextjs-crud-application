import { Accordion } from '../components';
import { ReactChildrenList } from '../components/ReactChildrenList';
import { TypedList } from '../components/TypedList';
import { SelectMenu } from '../components';
import { useState } from 'react';

export default function About() {
  const targets = [
    { value: 'es3', label: 'ECMAScript 3' },
    { value: 'es5', label: 'ECMAScript 5' },
    { value: 'es2015', label: 'ECMAScript 2015' },
    { value: 'es2016', label: 'ECMAScript 2016' },
    { value: 'es2017', label: 'ECMAScript 2017' },
    { value: 'es2018', label: 'ECMAScript 2018' },
    { value: 2019, label: 'ECMAScript 2019' },
  ];

  const [target, setTarget] = useState<string | number>(2019);

  return (
    <div>
      <h2>TypeScript Adventures</h2>
      <>
        <TypedList
          items={[
            { id: '2545S', type: 'low' },
            { id: '12SD', type: 'high', age: 42 },
            { id: '5654SD', type: 'low' },
            { id: '234CSS', type: 'high', age: 72 },
          ]}
          renderer={(item) => (
            <div>
              {item.type}, {item?.age}
            </div>
          )}
          filterFn={(item) => item.age >= 40}
        />
        <ReactChildrenList>
          <>item 1</>
          <>item 2</>
          <>item 3</>
        </ReactChildrenList>
        <Accordion
          items={[
            { title: 'Item 1', description: 'description 1' },
            { title: 'Item 2', description: 'description 2' },
          ]}
        />
        <SelectMenu options={targets} value={target} onChange={setTarget} />
      </>
    </div>
  );
}
