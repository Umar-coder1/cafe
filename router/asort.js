const express = require("express");
const asortControles = require("../controles/asort");
const urlencodedParser = express.urlencoded({ extended: false });

const asortRouter = new express.Router();

asortRouter.get("/category/:id",asortControles.getAsort);
// asortRouter.get("/", asortControles.getAsortObzor);
// asortRouter.get("/register", asortControles.getPageRegistr);
asortRouter.post("/add", urlencodedParser, asortControles.setAsort);
asortRouter.post("/reciep", urlencodedParser, asortControles.recAsort);
asortRouter.get("/delete/:id", urlencodedParser, asortControles.asortDelete);

module.exports = asortRouter;
