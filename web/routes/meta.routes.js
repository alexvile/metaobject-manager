import { Router } from "express";
import { Service } from "../services/service.js";
import onError from "../helpers/error.handler.js";
import shopify from "../shopify.js";

const metaRouter = Router();

metaRouter.get("/metaobjects/all", async (req, res) => {
  try {
    const metaObjects = await Service.getAllMetaobjects(res);
    res.status(200).json(metaObjects);
  } catch (error) {
    onError(error, res);
  }
});

metaRouter.get("/metaobject-definitions/all", async (req, res) => {
  try {
    const metaObjectDefinitions = await Service.getAllMetaobjectDefinitions(
      res
    );
    res.status(200).json(metaObjectDefinitions);
  } catch (error) {
    onError(error, res);
  }
});

metaRouter.post("/metaobject-definitions/new", async (req, res) => {
  try {
    const metaObjectDefinition = await Service.createMetaobjectDefinition(
      res,
      req.body
    );
    res.status(200).json(metaObjectDefinition);
  } catch (error) {
    onError(error, res);
  }
});

metaRouter.post("/metaobjects/new", async (req, res) => {
  try {
    const metaObject = await Service.createMetaobject(res, req.body);
    res.status(200).json(metaObject);
  } catch (error) {
    onError(error, res);
  }
});

export { metaRouter };
