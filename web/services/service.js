import shopify from "../shopify.js";

import {
  GET_ALL_METAOBJECT_DEFINITIONS,
  GET_ALL_METAOBJECTS,
  CREATE_METAOBJECT_DEFINITION,
  CREATE_METAOBJECT,
  UPDATE_METAOBJECT_BY_ID,
} from "../queries/queries.js";
export class Service {
  static getClient(res) {
    const session = res.locals.shopify.session;
    const client = new shopify.api.clients.Graphql({ session });
    return client;
  }
  static async getAllMetaobjectDefinitions(res) {
    const client = Service.getClient(res);

    const { body } = await client.query({
      data: GET_ALL_METAOBJECT_DEFINITIONS,
    });
    return body.data.metaobjectDefinitions;
  }

  static async getAllMetaobjects(res) {
    const client = Service.getClient(res);

    const { body } = await client.query({
      data: GET_ALL_METAOBJECTS,
    });
    return body.data.metaobjects;
  }

  static async createMetaobjectDefinition(res, incomingData) {
    const client = Service.getClient(res);
    const { body } = await client.query({
      data: {
        query: CREATE_METAOBJECT_DEFINITION,
        variables: {
          definition: incomingData,
        },
      },
    });
    // console.log(3, body);
    return body.data;
  }

  static async createMetaobject(res, incomingData) {
    console.log(incomingData);
    const client = Service.getClient(res);
    const { body } = await client.query({
      data: {
        query: CREATE_METAOBJECT,
        variables: {
          metaobject: incomingData,
        },
      },
    });
    // console.log(3, body);
    return body.data;
  }

  static async updateMetaobject(res, metaobjectId, incomingData) {
    console.log(incomingData);
    const client = Service.getClient(res);
    const { body } = await client.query({
      data: {
        query: UPDATE_METAOBJECT_BY_ID,
        variables: {
          id: metaobjectId,
          metaobject: incomingData,
        },
      },
    });
    // console.log(3, body);
    return body.data;
  }
}
