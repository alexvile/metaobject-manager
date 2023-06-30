export const Metafield = ({ parent, fieldKey, ...el }) => {
  // console.log(el);
  // console.log(fieldKey);
  let name = "";
  let type = "";
  let value = "";

  if (parent === "metaobject") {
    console.log("meta", el);
    name = el.definition.name;
    type = el.definition.type.name;
    value = el.value;
  } else {
    console.log("definit", el);
    name = el.name;
    type = el.type.name;
  }
  // const name = parent === "metaobject" ? el.definition.name : el.name
  return (
    <li>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Category: </strong>
        {type}
        {/* {definition.type.name}:{definition.type.category} */}
      </p>
      <p>
        <strong>KEY: </strong>
        {fieldKey}
      </p>
      {parent === "metaobject" && (
        <p>
          <strong>VALUE: </strong>
          {value}
        </p>
      )}
    </li>
  );
};
