import { Router } from "express";
import { Service } from "../services/service.js";
import onError from "../helpers/error.handler.js";
import shopify from "../shopify.js";

const baseRouter = Router();

baseRouter.get("/shop-info", async (req, res) => {
  try {
    const shopInfo = await Service.getShopInfo(res);
    res.status(200).json(shopInfo);
  } catch (error) {
    onError(error, res);
  }
});
baseRouter.get("/all", async (req, res) => {
  try {
    const metaObjects = await Service.getAllMetaobjects(res);
    res.status(200).json(metaObjects);
  } catch (error) {
    onError(error, res);
  }
});

export { baseRouter };
