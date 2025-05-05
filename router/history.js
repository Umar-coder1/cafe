const express = require("express");
const historyControles = require("../controles/history");
const urlencodedParser = express.urlencoded({ extended: false });

const historyRouter = new express.Router();

historyRouter.get("/", historyControles.getHistory);
// historyRouter.get("/obzor", historyControles.getPageObzor);
// categoryRouter.get("/register", authControles.getPageRegistr);
historyRouter.post("/add", urlencodedParser, historyControles.setHistory);
historyRouter.get("/delete/:id", urlencodedParser, historyControles.historyDelete);

module.exports = historyRouter;
