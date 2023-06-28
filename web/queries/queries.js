const GET_SHOP_INFO = `#graphql
  query getShopInfo {
    shop {
      name
      checkoutApiSupported
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
    }
  }
`;

// 1 get all metaobjects
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

// 2 create metaobject definition
const CREATE_TEST_METAOBJECT_DEFINITION = `#graphql
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

// 3 create metaobject

const CREATE_TEST_METAOBJECT = `#graphql
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

// 4 update metaobject

// 5 delete metaobject

// 6 delete metaobject definition

export { GET_SHOP_INFO, GET_ALL_METAOBJECTS };
