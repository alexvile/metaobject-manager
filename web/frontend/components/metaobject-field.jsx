export const MetaobjectField = ({ fieldKey, ...el }) => {
  //   console.log(el);
  const { value, definition } = el;
  return (
    <li>
      <p>
        <strong>Name: </strong>
        {definition.name}
      </p>
      <p>
        <strong>Category: </strong>
        {definition.type.name}:{definition.type.category}
      </p>
      <p>
        <strong>KEY: </strong>
        {fieldKey}
      </p>
      <p>
        <strong>VALUE: </strong>
        {value}
      </p>
    </li>
  );
};
