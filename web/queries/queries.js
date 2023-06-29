// 1.1 get metaobject definitions without connected metaobjects
const GET_ALL_METAOBJECT_DEFINITIONS = `#graphql
  query getAllMetaobjectDefinitions {
    metaobjectDefinitions(first: 240) {
      edges {
        node {
          id
          metaobjectsCount
          name
          type
          description
          displayNameKey
          access {
            admin
            storefront
          }
          fieldDefinitions {
            description
            key
            name
            required
            type {
              name
              category
            }
          }
        }
      }
    }
  }
`;
// 1.2 get all metaobjects
const GET_ALL_METAOBJECTS = `#graphql
  query getAllMetaobjects {
    metaobjects(first: 100, type: "") {
      edges {
        node {
          id
          type
          handle
          displayName
          updatedAt
          definition {
            name
            description
          }
          capabilities {
            publishable {
              status
            }
          }
          fields {
            definition {
              name
              required
              type {
                category
                name
              }
            }
            key
            value
          }
        }
      }
    }
  }
`;

// 2 get metaobject by id

// 3 create metaobject definition
const CREATE_METAOBJECT_DEFINITION = `#graphql
  mutation CreateMetaobjectDefinition(
    $definition: MetaobjectDefinitionCreateInput!
  ) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
        fieldDefinitions {
          name
          key
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;

// 4 create metaobject

const CREATE_METAOBJECT = `#graphql
mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
  metaobjectCreate(metaobject: $metaobject) {
    metaobject {
      handle
      fields {
        key
        value
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
`;

// 5 update metaobject

// 6 delete metaobject

export {
  GET_ALL_METAOBJECT_DEFINITIONS,
  GET_ALL_METAOBJECTS,
  CREATE_METAOBJECT_DEFINITION,
  CREATE_METAOBJECT,
};

// get metaobject definitions with connected metaobjects
// {
//   metaobjectDefinitions(first: 25) {
//     edges {
//       node {
//         name
//         type
//         metaobjects(first:4){
//           edges {
//             node {
//               displayName
//             }
//           }
//         }
//       }
//     }
//   }
// }
