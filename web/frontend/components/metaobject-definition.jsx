import { Metafield } from "./metafield";

export const MetaobjectDefinition = ({ ...el }) => {
  console.log(el);
  const { name, type, metaobjectsCount, id, fieldDefinitions } = el;
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

        <strong>
          <div>Fields</div>
        </strong>
        <ul>
          {fieldDefinitions.length > 0 &&
            fieldDefinitions.map((el) => (
              <Metafield
                key={el.key}
                fieldKey={el.key}
                {...el}
                parent="definition"
              />
            ))}
        </ul>
      </div>
    </li>
  );
};
