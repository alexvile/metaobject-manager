export const MetaobjectDefinition = ({ ...el }) => {
  console.log(el);
  const { name, type, metaobjectsCount, id } = el;
  return (
    <li>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Name: </strong>
        {name}
      </p>

      <p>
        <strong>Type: </strong>
        {type}
      </p>
      <div>
        <strong>Connected to {metaobjectsCount} metaobjects</strong>
        {/* <ul>
              {fields.length > 0 &&
                fields.map((el) => (
                  <MetaobjectField key={el.key} fieldKey={el.key} {...el} />
                ))}
            </ul> */}
      </div>
    </li>
  );
};
