const express = require("express");
const orderControles = require("../controles/order");
const urlencodedParser = express.urlencoded({ extended: false });

const orderRouter = new express.Router();

orderRouter.get("/", orderControles.getOrder);
orderRouter.get("/asort/:id", orderControles.getOrderAsort);
orderRouter.post("/",orderControles.orderAdd);
// categoryRouter.get("/register", authControles.getPageRegistr);
orderRouter.get("/add/:id", urlencodedParser, orderControles.orderAdd);

module.exports =orderRouter;
