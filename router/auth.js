const express = require("express");
const authControles = require("../controles/auth");
const urlencodedParser = express.urlencoded({ extended: false });

const authRounter = new express.Router();

authRounter.get("/login", authControles.getPageLogIn);
authRounter.get("/register", authControles.getPageRegistr);
authRounter.post("/register", urlencodedParser, authControles.setUser);
authRounter.post("/login", urlencodedParser, authControles.logUser);

module.exports = authRounter;
