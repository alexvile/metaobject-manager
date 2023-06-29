import { MetaobjectField } from "./metaobject-field";
export const Metaobject = ({ ...el }) => {
  //   console.log(el);
  const { id, capabilities, displayName, type, fields } = el;
  return (
    <li>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Status: </strong>
        {capabilities.publishable.status}
      </p>
      <p>
        <strong>DisplayName: </strong>
        {displayName}
      </p>
      <p>
        <strong>Type: </strong>
        {type}
      </p>
      <div>
        <strong>Fields</strong>
        <ul>
          {fields.length > 0 &&
            fields.map((el) => (
              <MetaobjectField key={el.key} fieldKey={el.key} {...el} />
            ))}
        </ul>
      </div>
    </li>
  );
};
