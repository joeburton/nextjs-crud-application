interface PropsType<T> {
  items: T[];
  renderer: (item: T) => React.ReactNode;
  filterFn?: (item: T) => boolean;
}

interface AbstractItem {
  id: string;
}

const TypedList = <T extends AbstractItem>(props: PropsType<T>) => {
  const items = props.filterFn
    ? props.items.filter(props.filterFn)
    : props.items;
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{props.renderer(item)}</li>;
      })}
    </ul>
  );
};

export default TypedList;
