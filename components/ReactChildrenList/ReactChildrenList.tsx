import * as React from 'react';

interface ListProps {
  children: React.ReactNode;
}

const ReactChildrenList = (props: ListProps) => {
  return (
    <ul>
      {React.Children.map(props.children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};

export default ReactChildrenList;
