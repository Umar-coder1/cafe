const Users = require("../schema/users");
module.exports.getPageLogIn = function (req, res) {
  res.render("voyti.hbs");
};
module.exports.getPageRegistr = function (req, res) {
  res.render("reg.hbs");
};

module.exports.setUser = async function (req, res) {

  const condidate = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  await condidate.save();
  res.render("reg.hbs", {
    message: "Зарегистрирован",
  });
};
module.exports.logUser = async function (req, res) {
  const condidate = await Users.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (condidate) {
    res.redirect("/category/obzor");
  } else {
    res.render("voyti.hbs", {
      message: "Неверный логин или пароль",
    });
  }
};
