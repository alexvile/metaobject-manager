import shopify from "../shopify.js";

import { GET_SHOP_INFO, GET_ALL_METAOBJECTS } from "../queries/queries.js";
export class Service {
  static getClient(res) {
    const session = res.locals.shopify.session;
    const client = new shopify.api.clients.Graphql({ session });
    return client;
  }

  static async getShopInfo(res) {
    const client = Service.getClient(res);

    const { body } = await client.query({
      data: GET_SHOP_INFO,
    });
    return body.data.shop;
  }

  static async getAllMetaobjects(res) {
    const client = Service.getClient(res);

    const { body } = await client.query({
      data: GET_ALL_METAOBJECTS,
    });
    console.log(body);
    return body.data.metaobjects;
  }
}
