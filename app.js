const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const authRouter = require("./router/auth");
const categoryRouter = require("./router/category");
const asortRouter = require("./router/asort");
const orderRouter = require("./router/order");
const historyRouter = require("./router/history");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.json())


async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db");
    console.log("db started");
  } catch (err) {
    return console.log(err);
  }
}
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/asort", asortRouter);
app.use("/order", orderRouter);
app.use("/history", historyRouter);

app.get("/", function (request, response) {
  response.redirect("/auth/login");
});

main();
app.listen(3000, function () {
  console.log("Сервер запущен");
});
