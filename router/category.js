const express = require("express");
const categoryControles = require("../controles/category");
const urlencodedParser = express.urlencoded({ extended: false });

const categoryRouter = new express.Router();

categoryRouter.get("/", categoryControles.getCategory);
categoryRouter.get("/obzor", categoryControles.getPageObzor);
// categoryRouter.get("/register", authControles.getPageRegistr);
categoryRouter.post("/add", urlencodedParser, categoryControles.setCategory);
categoryRouter.get("/delete/:id", urlencodedParser, categoryControles.categoryDelete);

module.exports = categoryRouter;
